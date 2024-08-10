"use server";
import { Review } from "@/models/Reviews"; // Adjust the path to your Review model
import mongoose from "mongoose";
import { User } from "@/models/User";
import { auth } from "@/auth";

// Helper function to connect to MongoDB
async function connectToDatabase() {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
}

// Function to handle submitting a review
export async function submitReview(shop_id, rating, review) {
    await connectToDatabase();

    try {
        const session = await auth();
        if (!session || !session.user || !session.user.email) {
            throw new Error("User not authenticated");
        }

        const email = session.user.email;
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error("User not found");
        }

        const user_id = user._id;

        if (!user_id || !shop_id) {
            throw new Error("User ID and Shop ID are required");
        }

        // Find the shop's reviews
        let shopReviews = await Review.findOne({ shop_id });

        if (!shopReviews) {
            // If no reviews exist for the shop, create a new entry
            shopReviews = new Review({ shop_id, reviews: [] });
        }

        // Find if the user already has a review for the shop
        const userReviewIndex = shopReviews.reviews.findIndex(r => r.user_id.toString() === user_id.toString());

        if (userReviewIndex === -1) {
            // If the user has not reviewed the shop, add a new review
            shopReviews.reviews.push({ user_id, rating, review });
        } else {
            // If the user has already reviewed the shop, update the existing review
            shopReviews.reviews[userReviewIndex].rating = rating;
            shopReviews.reviews[userReviewIndex].review = review;
            shopReviews.reviews[userReviewIndex].created_at = new Date();
        }

        // Save the shop's reviews
        await shopReviews.save();

        return { message: "Review submitted successfully" };
    } catch (error) {
        console.error("Error submitting review:", error);
        throw new Error("Internal server error");
    }
}
