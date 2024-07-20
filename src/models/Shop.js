import { model, models, Schema } from "mongoose";

const ShopSchema = new Schema({
  Uid: { type: String, unique: true },
  Map: String,
  Area: { type: String, index: true },
  Name: { type: String, required: true, index: true },
  City: { type: String, required: true, index: true },
  Phone: String,
  Reviews: { type: Number, default: 0, index: true },
  Time: String,
  Service: Number,
  Category: { type: String, required: true, index: true },
  Category2: String,
  Category3: String,
  Rating: { type: Number, default: 0, index: true },
  Longitude: Number,
  Latitude: Number,
  Address: String,
  Website: String,
  Liked: { type: Boolean, default: false },
  visitCount: { type: Number, default: 0 }, // New field
});

// Compound index for optimized querying
ShopSchema.index({
  Name: 'text',
  Category: 'text',
  Area: 'text',
  City: 'text',
}, { name: "compoundTextIndex" });

// Ensure indexes are created
ShopSchema.on('index', error => {
  if (error) console.error('Index creation error:', error);
});

export const Shop = models?.Shop || model("Shop", ShopSchema);
