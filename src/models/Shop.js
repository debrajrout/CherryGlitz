import { model, models, Schema } from "mongoose";


const ShopSchema = new Schema({
  Id: Number,
  Uid: String,
  Map: String,
  Area: String,
  Name: String,
  City: String,
  Phone: String,
  Reviews: Number,
  Time: String,
  Service: String,
  Category2: String,
  Rating: Number,
  Category: String,
  Phone: String,
  Longitude: Number,
  Latitude: Number,
  Address: String,
  Website: String,
});

ShopSchema.index(
  {
    Name: 'text',
    Category: 'text',
    Category2: 'text',
    Area: 'text',
    City: 'text',
    Rating: -1,
    Reviews: -1
  },
  { name: "compoundIndex" } // Optional index name
);

export const Shop = models?.Shop || model("Shop", ShopSchema);
