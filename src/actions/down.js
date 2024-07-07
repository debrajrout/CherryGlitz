"use server";

import { Shop } from "@/models/Shop";
import mongoose from "mongoose";

// Define the new collection schemas
const CategorySchema = new mongoose.Schema({
    categories: [String],
});

const CitySchema = new mongoose.Schema({
    name: String,
    areas: [String],
});

const Category = mongoose.models?.Category || mongoose.model("Category", CategorySchema);
const City = mongoose.models?.City || mongoose.model("City", CitySchema);

// Helper function to connect to MongoDB
async function connectToDatabase() {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
}

// Function to populate the categories collection
export async function populateCategoriesCollection() {
    await connectToDatabase();

    try {
        const categoriesSet = new Set();

        // Fetch all categories from the shops
        const shops = await Shop.find({}, "Category").exec();
        shops.forEach((shop) => {
            if (shop.Category) {
                categoriesSet.add(shop.Category);
            }
        });

        const categories = Array.from(categoriesSet);

        // Save to the categories collection
        await Category.deleteMany({}); // Clear the collection before inserting
        const categoryDoc = new Category({ categories });
        await categoryDoc.save();

        return categoryDoc;
    } catch (error) {
        console.error("Error populating categories collection:", error);
        throw error;
    }
}

// Function to populate the cities collection
export async function populateCitiesCollection() {
    await connectToDatabase();

    try {
        const citiesMap = {};

        // Fetch all cities and areas from the shops
        const shops = await Shop.find({}, "City Area").exec();
        shops.forEach((shop) => {
            if (!citiesMap[shop.City]) {
                citiesMap[shop.City] = new Set();
            }
            citiesMap[shop.City].add(shop.Area);
        });

        const cities = Object.keys(citiesMap).map((city) => ({
            name: city,
            areas: Array.from(citiesMap[city]),
        }));

        // Save to the cities collection
        await City.deleteMany({}); // Clear the collection before inserting
        await City.insertMany(cities);

        return cities;
    } catch (error) {
        console.error("Error populating cities collection:", error);
        throw error;
    }
}

// Function to fetch categories
export async function fetchCategoriess() {
    await connectToDatabase();

    try {
        const categoryDoc = await Category.findOne().exec();
        return categoryDoc?.categories || [];
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
}

// Function to fetch cities and their areas
export async function fetchCitiesAndAreass() {
    await connectToDatabase();

    try {
        const cities = await City.find().exec();
        return cities;
    } catch (error) {
        console.error("Error fetching cities and areas:", error);
        throw error;
    }
}

// Call these functions to initially populate the new collections
populateCategoriesCollection();
populateCitiesCollection();
