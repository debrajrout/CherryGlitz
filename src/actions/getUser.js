"use server";

import { User } from "@/models/User";
import mongoose from "mongoose";
import { auth } from "@/auth";

async function connectToDatabase() {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
}

export async function fetchUser() {
    try {
        const session = await auth();
        if (!session || !session.user || !session.user.email) {
            throw new Error("User is not authenticated");
        }

        const email = session.user.email;
        const query = { email: new RegExp(email, 'i') };

        await connectToDatabase();

        const user = await User.findOne(query).lean().exec(); // Find one user by email
        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw new Error('Failed to fetch user');
    }
}
