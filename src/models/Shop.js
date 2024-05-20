import { model, models, Schema } from "mongoose";

const ShopSchema = new Schema({
  ID: String,
  Name: String,
  Rating: String,
  Reviews: String,
  Category: String,
  Email: String,
  Phone: String,
  Longitude: String,
  Latitude: String,
  Address: String,
  WebSite: String,
});

export const Shop = models?.Shop || model("Shop", ShopSchema);
