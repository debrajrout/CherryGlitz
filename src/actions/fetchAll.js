"use server";

import mongoose from "mongoose";
import NodeCache from "node-cache";
import { Shop } from "@/models/Shop";
import { Category } from "@/models/Category";
import { City } from "@/models/City";
import { VisitIncrement } from "@/models/VisitIncrement";
import cron from 'node-cron';

// Initialize cache
const cache = new NodeCache({ stdTTL: 600 }); // Cache TTL (Time To Live) in seconds

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
    const cacheKey = "categories";
    const cachedCategories = cache.get(cacheKey);
    if (cachedCategories) {
        return cachedCategories;
    }

    await connectToDatabase();

    try {
        const categoriesDoc = await Category.findOne().lean().select('categories').exec();
        const categories = categoriesDoc?.categories || [];
        cache.set(cacheKey, categories);
        return categories;
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

    const cacheKey = `liked_${ids.join("_")}`;
    const cachedShops = cache.get(cacheKey);
    if (cachedShops) {
        return cachedShops;
    }

    await connectToDatabase();

    const query = { Uid: { $in: ids.map(id => new RegExp(id, 'i')) } };

    try {
        const shops = await Shop.find(query).lean().exec();
        cache.set(cacheKey, shops);
        return shops;
    } catch (error) {
        console.error("Error fetching liked shops:", error);
        throw new Error("Failed to fetch liked shops");
    }
}

// Fetch cities and their respective areas from City collection
export async function fetchCitiesAndAreas() {
    const cacheKey = "cities_and_areas";
    const cachedCities = cache.get(cacheKey);
    if (cachedCities) {
        return cachedCities;
    }

    await connectToDatabase();

    try {
        const cities = await City.find().lean().exec();
        cache.set(cacheKey, cities);
        return cities;
    } catch (error) {
        console.error("Error fetching cities and areas:", error);
        throw new Error("Failed to fetch cities and areas");
    }
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
}

export async function filterShops(category, city, area, starRating, responseTime, userLat, userLon, page = 1, limit = 10) {
    const cacheKey = `shops_${category}_${city}_${area}_${starRating}_${responseTime}_${userLat}_${userLon}_${page}_${limit}`;
    const cachedShops = cache.get(cacheKey);
    if (cachedShops) {
        return cachedShops;
    }

    await connectToDatabase();

    try {
        // Base query
        const query = {
            ...(category && { Category: new RegExp(category, 'i') }),
            ...(city && { City: new RegExp(city, 'i') }),
            ...(area && { Area: new RegExp(area, 'i') }),
            ...(starRating && !isNaN(starRating) && { Rating: { $gte: parseInt(starRating) } })
        };

        // Fetch shops matching the base query
        const shops = await Shop.find(query)
            .skip((page - 1) * limit)
            .limit(limit)
            .lean()
            .exec();

        // Calculate distances and filter results
        const filteredShops = shops
            .map(shop => {
                const distance = calculateDistance(userLat, userLon, shop.Latitude, shop.Longitude);
                return { ...shop, distance };
            })
            .sort((a, b) => a.distance - b.distance); // Sort by distance

        // Apply response time sorting
        if (responseTime) {
            filteredShops.sort((a, b) => b.responseTime - a.responseTime); // Sort by responseTime descending
        }

        cache.set(cacheKey, filteredShops);
        return filteredShops;

    } catch (error) {
        console.error("Error filtering shops:", error);
        throw new Error("Failed to filter shops");
    }
}

// Function to fetch shop details by ID 
export async function fetchShopById(shopId) {
    const cacheKey = `shop_${shopId}`;
    const cachedShop = cache.get(cacheKey);
    if (cachedShop) {
        return cachedShop;
    }

    await connectToDatabase();

    try {
        const shop = await Shop.findById(shopId).lean().exec();
        if (!shop) {
            throw new Error(`Shop with ID ${shopId} not found`);
        }
        cache.set(cacheKey, shop);
        return shop;
    } catch (error) {
        console.error(`Error fetching shop with ID ${shopId}:`, error);
        throw new Error(`Failed to fetch shop with ID ${shopId}`);
    }
}

export async function incrementVisitCount(shopId) {
    await connectToDatabase();
    console.log("shopId increment by 1", shopId)
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

        // Update cache
        cache.set(`shop_${shopId}`, shop);

        return shop;
    } catch (error) {
        console.error(`Error incrementing visit count for shop with ID ${shopId}:`, error);
        throw new Error(`Failed to increment visit count for shop with ID ${shopId}`);
    }
}

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

            // Invalidate cache for the shop
            cache.del(`shop_${increment.shopId}`);
        }
    } catch (error) {
        console.error("Error decrementing visit count:", error);
    }
});
