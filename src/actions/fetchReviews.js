"use server";
import { Review } from "@/models/Reviews"; // Adjust the path if necessary
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

// Function to get all reviews for a shop
export async function getShopReviews(shop_id) {
    await connectToDatabase();

    try {
        if (!shop_id) {
            throw new Error("Shop ID is required");
        }

        // Find the shop's reviews and populate the user_id field with user names
        const shopReviews = await Review.findOne({ shop_id }).populate('reviews.user_id', 'name');

        if (!shopReviews) {
            return { reviews: [] }; // Return an empty reviews array if no reviews found
        }

        // Map the reviews to include user names
        const reviewsWithUserNames = shopReviews.reviews.map(review => ({
            userName: review.user_id.name,
            rating: review.rating,
            review: review.review,
            createdAt: review.created_at,
        }));

        return { reviews: reviewsWithUserNames };
    } catch (error) {
        console.error("Error fetching shop reviews:", error);
        throw new Error("Internal server error");
    }
}
