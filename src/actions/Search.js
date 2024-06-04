"use server";
import { Shop } from "@/models/Shop";
import mongoose from "mongoose";
export default async function grabUsername(formData) {
  mongoose.connect(process.env.MONGO_URI);
  const username = formData.get("username");

  const existingPage = await Shop.findOne({ uri: username });
  if (existingPage) {
    return existingPage;
  } else {
    return "No user found.";
  }
}
