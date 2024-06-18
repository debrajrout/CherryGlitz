"use server"

import { Shop } from "@/models/Shop";
import mongoose from "mongoose";

let categoriesCache = null;

export async function fetchCategories() {
    if (categoriesCache) {
        return categoriesCache;
    }

    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }

    try {
        const shops = await Shop.find({}, "Category").exec();
        const categoriesSet = new Set();

        shops.forEach((shop) => {
            if (shop.Category) {
                categoriesSet.add(shop.Category);
            }
        });

        const categories = Array.from(categoriesSet);
        categoriesCache = categories;
        return categories;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
}
