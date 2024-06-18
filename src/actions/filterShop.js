"use server";
import { Shop } from "@/models/Shop";
import mongoose from "mongoose";

export async function filterShops(category, city, area) {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

    try {
        const query = {};

        if (category) {
            query.$or = [
                { Category: new RegExp(category, 'i') },
                { Category2: new RegExp(category, 'i') }
            ];
        }

        if (city) {
            query.City = new RegExp(city, 'i');
        }

        if (area) {
            query.Area = new RegExp(area, 'i');
        }

        const shops = await Shop.find(query)
            .sort({ Rating: -1, Reviews: -1 })
            .limit(10)
            .exec();

        return shops;
    } catch (error) {
        console.error("Error filtering shops:", error);
        throw error;
    }
}
