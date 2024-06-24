"use server";
import { User } from "@/models/User";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// Helper function to connect to MongoDB
async function connectToDatabase() {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
}

// Function to handle liking or unliking a shop
export async function likeShop(shopId) {
    await connectToDatabase();

    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            throw new Error("User not authenticated");
        }

        const user = await User.findOne({ email: session.user.email });
        if (!user) {
            throw new Error("User not found");
        }

        const likedIndex = user.liked.indexOf(shopId);
        if (likedIndex === -1) {
            // If shopId is not already in liked array, add it
            user.liked.push(shopId);
        } else {
            // If shopId is already in liked array, remove it
            user.liked.splice(likedIndex, 1);
        }

        await user.save(); // Save the user document to update liked shops
        return user.liked; // Return updated liked array
    } catch (error) {
        console.error("Error liking or unliking shop:", error);
        throw error;
    }
}

export async function RemoveLike(shopId) {
    await connectToDatabase();

    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            throw new Error("User not authenticated");
        }

        const user = await User.findOne({ email: session.user.email });
        if (!user) {
            throw new Error("User not found");
        }

        const likedIndex = user.liked.indexOf(shopId);
        user.liked.splice(likedIndex, 1);

        await user.save(); // Save the user document to update liked shops
    } catch (error) {
        console.error("Error liking or unliking shop:", error);
        throw error;
    }
}