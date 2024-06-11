"use server";
import { Shop } from "@/models/Shop";
import mongoose from "mongoose";

export async function grabShop(query) {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }

  try {
    const words = query.split(/\s+/);
    const placeWords = ["near", "in", "at", "on"];
    const placeIndex = words.findIndex(word => placeWords.includes(word.toLowerCase()));

    let keywordQuery = query;
    let placeQuery = '';

    if (placeIndex !== -1) {
      keywordQuery = words.slice(0, placeIndex).join(' ');
      placeQuery = words.slice(placeIndex + 1).join(' ');
    }

    const regexPlace = new RegExp(placeQuery, 'i');
    const regexKeyword = new RegExp(keywordQuery, 'i');

    const suggestions = await Shop.find({
      $and: [
        {
          $or: [
            { Category: regexKeyword },
            { Category2: regexKeyword },
            { Name: regexKeyword }
          ]
        },
        placeQuery ? {
          $or: [
            { Area: regexPlace },
            { City: regexPlace }
          ]
        } : {}
      ].filter(Boolean)
    }).sort({ Rating: -1, Reviews: -1 }).limit(10).exec();

    console.log("results :", suggestions);
    return suggestions;
  } catch (error) {
    console.error("Error fetching shop suggestions:", error);
    throw error;
  }
}
