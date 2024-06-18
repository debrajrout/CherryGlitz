"use server"

import { Shop } from "@/models/Shop";
import mongoose from "mongoose";

let citiesCache = null;

export async function fetchCitiesAndAreas() {
  if (citiesCache) {
    return citiesCache;
  }

  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  try {
    const shops = await Shop.find({}, "City Area").exec();
    const citiesMap = {};

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

    citiesCache = cities;
    return cities;
  } catch (error) {
    console.error("Error fetching cities and areas:", error);
    throw error;
  }
}
