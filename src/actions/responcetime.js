"use server";
import { Shop } from "@/models/Shop";
import mongoose from "mongoose";

// Helper function to connect to MongoDB
async function connectToDatabase() {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
}

// Function to calculate response time based on rating and reviews
const calculateResponseTime = (rating, reviews) => {
    // Handle cases where rating is not provided or invalid
    if (rating == null || reviews == null || rating < 1 || rating > 5) {
        return 60;
    }

    if (rating === 5) {
        if (reviews > 2000) return 5;
        if (reviews >= 1000) return 10;
        if (reviews >= 800) return 15;
        if (reviews >= 500) return 20;
        if (reviews >= 300) return 25;
        return 30;
    } else if (rating >= 4 && rating < 5) {
        if (reviews > 2000) return 10;
        if (reviews >= 1000) return 15;
        if (reviews >= 800) return 20;
        if (reviews >= 500) return 25;
        if (reviews >= 300) return 30;
        return 35;
    } else if (rating >= 3 && rating < 4) {
        if (reviews > 2000) return 15;
        if (reviews >= 1000) return 20;
        if (reviews >= 800) return 25;
        if (reviews >= 500) return 30;
        if (reviews >= 300) return 35;
        return 40;
    }

    // Default case for ratings below 3
    return 60;
};


// Function to update the response time for all shops
export async function updateResponseTimeForAllShops() {
    await connectToDatabase();

    try {
        const shops = await Shop.find().exec();
        const bulkOps = shops.map((shop) => {
            const responseTime = calculateResponseTime(shop.Rating, shop.Reviews);
            return {
                updateOne: {
                    filter: { _id: shop._id },
                    update: { responseTime: responseTime }
                }
            };
        });

        await Shop.bulkWrite(bulkOps);

        console.log("Response time updated for all shops");
    } catch (error) {
        console.error("Error updating response time for shops:", error);
        throw error;
    }
}

// Call this function to update response time initially
updateResponseTimeForAllShops();
