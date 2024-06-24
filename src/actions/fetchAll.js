"use server";

import { Shop } from "@/models/Shop";
import { Category } from "@/models/Category";
import { City } from "@/models/City";
import mongoose from "mongoose";

// Caching results to improve performance
let categoriesCache = null;
let citiesCache = null;

// Cache for shops
let shopCache = {};
let cacheClearTimeout = null;
const CACHE_CLEAR_INTERVAL = 60 * 60 * 1000; // Clear cache every 1 hour

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

// Call this function to reset the cache clearing timer
function resetCacheClearingTimer() {
    if (cacheClearTimeout) {
        clearTimeout(cacheClearTimeout);
    }
    cacheClearTimeout = setTimeout(clearShopCache, CACHE_CLEAR_INTERVAL);
}

// Helper function to connect to MongoDB
async function connectToDatabase() {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGO_URI);
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
        const categories = categoriesDoc?.categories || [];
        categoriesCache = categories;
        return categories;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
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
        throw new Error('Failed to fetch liked shops');
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
        return cities;
    } catch (error) {
        console.error("Error fetching cities and areas:", error);
        throw error;
    }
}

// Filter shops based on category, city, and area with pagination
export async function filterShops(category, city, area, page = 1, limit = 10) {
    await connectToDatabase();

    try {
        const cacheKey = `${category}-${city}-${area}-${page}-${limit}`;
        if (shopCache[cacheKey]) {
            console.log("Returning from cache.");
            return shopCache[cacheKey];
        }

        const query = {};
        if (category) {
            query.$or = [{ Category: new RegExp(category, 'i') }];
        }
        if (city) {
            query.City = new RegExp(city, 'i');
        }
        if (area) {
            query.Area = new RegExp(area, 'i');
        }

        const shops = await Shop.find(query)
            .sort({ Rating: -1, Reviews: -1 })
            .skip((page - 1) * limit)
            .limit(limit)
            .lean()
            .exec();

        shopCache[cacheKey] = shops;

        // Reset cache clearing timer
        resetCacheClearingTimer();

        return shops;
    } catch (error) {
        console.error("Error filtering shops:", error);
        throw error;
    }
}

// Fetch all information of a shop by its ID
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
        throw error;
    }
}


// Initialize cache clearing when the module is first loaded
initializeCacheClearing();
