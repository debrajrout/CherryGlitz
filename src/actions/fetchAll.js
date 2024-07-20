"use server";

import mongoose from "mongoose";
import { Shop } from "@/models/Shop";
import { Category } from "@/models/Category";
import { City } from "@/models/City";
import { VisitIncrement } from "@/models/VisitIncrement";
import cron from 'node-cron';

// Cache for categories and cities
let categoriesCache = null;
let citiesCache = null;

// Cache for filtered shops
let shopCache = {};
const CACHE_CLEAR_INTERVAL = 60 * 60 * 1000; // Clear cache every 1 hour
let cacheClearTimeout = null;

// Function to clear shopCache
function clearShopCache() {
    shopCache = {};
    console.log("Shop cache cleared.");
}

// Function to initialize cache clearing
function initializeCacheClearing() {
    if (cacheClearTimeout) {
        clearTimeout(cacheClearTimeout);
    }
    cacheClearTimeout = setTimeout(clearShopCache, CACHE_CLEAR_INTERVAL);
}

// Helper function to connect to MongoDB
async function connectToDatabase() {
    if (mongoose.connection.readyState === 0) {
        try {
            await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log("Connected to MongoDB");
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
            throw new Error("Failed to connect to MongoDB");
        }
    }
}

// Fetch unique categories from Category collection
export async function fetchCategories() {
    if (categoriesCache) {
        return categoriesCache;
    }

    await connectToDatabase();

    try {
        const categoriesDoc = await Category.findOne().lean().exec();
        categoriesCache = categoriesDoc?.categories || [];
        return categoriesCache;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw new Error("Failed to fetch categories");
    }
}

// Fetch liked shops based on IDs
export async function fetchLiked(ids) {
    if (!Array.isArray(ids) || ids.length === 0) {
        return []; // Return an empty array if no IDs are provided
    }

    await connectToDatabase();

    const query = { Uid: { $in: ids.map(id => new RegExp(id, 'i')) } };

    try {
        const shops = await Shop.find(query).lean().exec();
        return shops;
    } catch (error) {
        console.error("Error fetching liked shops:", error);
        throw new Error("Failed to fetch liked shops");
    }
}

// Fetch cities and their respective areas from City collection
export async function fetchCitiesAndAreas() {
    if (citiesCache) {
        return citiesCache;
    }

    await connectToDatabase();

    try {
        const cities = await City.find().lean().exec();
        citiesCache = cities;
        return citiesCache;
    } catch (error) {
        console.error("Error fetching cities and areas:", error);
        throw new Error("Failed to fetch cities and areas");
    }
}

// Function to filter shops based on category, city, area, starRating, page, and limit
export async function filterShops(category, city, area, starRating, page = 1, limit = 10) {
    await connectToDatabase();

    try {
        const cacheKey = `${category}-${city}-${area}-${starRating}-${page}-${limit}`;
        if (shopCache[cacheKey]) {
            console.log("Returning from cache.");
            return shopCache[cacheKey];
        }

        const query = {};
        if (category) {
            query.Category = new RegExp(category, 'i');
        }
        if (city) {
            query.City = new RegExp(city, 'i');
        }
        if (area) {
            query.Area = new RegExp(area, 'i');
        }
        if (starRating && !isNaN(starRating)) {
            const rating = parseInt(starRating);
            query.Rating = { $gte: rating };
        }

        const shops = await Shop.find(query)
            // .sort({ Rating: -1, Reviews: -1 })
            .skip((page - 1) * limit)
            .limit(limit)
            .lean()
            .exec();

        shopCache[cacheKey] = shops;

        // Reset cache clearing timer
        initializeCacheClearing();

        return shops;
    } catch (error) {
        console.error("Error filtering shops:", error);
        throw new Error("Failed to filter shops");
    }
}

// Function to fetch shop details by ID 
export async function fetchShopById(shopId) {
    await connectToDatabase();

    try {
        const shop = await Shop.findById(shopId).lean().exec();
        if (!shop) {
            throw new Error(`Shop with ID ${shopId} not found`);
        }
        return shop;
    } catch (error) {
        console.error(`Error fetching shop with ID ${shopId}:`, error);
        throw new Error(`Failed to fetch shop with ID ${shopId}`);
    }
}

export async function incrementVisitCount(shopId) {
    await connectToDatabase();

    try {
        // Create a new visit increment document
        const visitIncrement = new VisitIncrement({ shopId });
        await visitIncrement.save();

        // Increment the visit count in the Shop collection
        const shop = await Shop.findByIdAndUpdate(
            shopId,
            { $inc: { visitCount: 1 } },
            { new: true }
        ).lean().exec();

        if (!shop) {
            throw new Error(`Shop with ID ${shopId} not found`);
        }

        return shop;
    } catch (error) {
        console.error(`Error incrementing visit count for shop with ID ${shopId}:`, error);
        throw new Error(`Failed to increment visit count for shop with ID ${shopId}`);
    }
}

// Initialize cache clearing when the module is first loaded
initializeCacheClearing();

// Set up background job to decrement visit count
cron.schedule('0 0 * * *', async () => {
    await connectToDatabase();

    try {
        const expiredIncrements = await VisitIncrement.find({ createdAt: { $lte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } });

        for (const increment of expiredIncrements) {
            await Shop.findByIdAndUpdate(
                increment.shopId,
                { $inc: { visitCount: -1 } }
            ).exec();

            await increment.remove();
        }
    } catch (error) {
        console.error("Error decrementing visit count:", error);
    }
});
