"use server";

import mongoose from "mongoose";
import { Shop } from "@/models/Shop";
import { Category } from "@/models/Category";
import { City } from "@/models/City";
import { VisitIncrement } from "@/models/VisitIncrement";
import cron from 'node-cron';

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
    await connectToDatabase();

    try {
        const categoriesDoc = await Category.findOne().lean().select('categories').exec();
        const categories = categoriesDoc?.categories || [];
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
    await connectToDatabase();

    try {
        const cities = await City.find().lean().exec();
        return cities;
    } catch (error) {
        console.error("Error fetching cities and areas:", error);
        throw new Error("Failed to fetch cities and areas");
    }
}

// Function to filter shops based on category, city, area, starRating, page, and limit
export async function filterShops(category, city, area, starRating, responseTime, page = 1, limit = 10) {
    await connectToDatabase();

    try {
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
            query.Rating = { $gte: parseInt(starRating) };
        }

        const sortQuery = {};
        if (responseTime) {
            sortQuery.responseTime = -1; // Sort by responseTime descending
        }

        const shops = await Shop.find(query)
            .sort(sortQuery)
            .skip((page - 1) * limit)
            .limit(limit)
            .lean()
            .select('Uid Name Category City Area Rating responseTime') // Select only necessary fields
            .exec();

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
        }
    } catch (error) {
        console.error("Error decrementing visit count:", error);
    }
});
