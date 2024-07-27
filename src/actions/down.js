"use server";
import { Shop } from "@/models/Shop";
import mongoose from "mongoose";

const CitySchema = new mongoose.Schema({
    name: String,
    areas: [String],
});


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




// Function to fetch cities and their areas
export async function fetchCitiesAnddAreas() {
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
populateCitiesCollection();