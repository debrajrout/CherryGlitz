import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  emailVerified: { type: Date },
  location: { type: String },
  liked: { type: [String], default: [] },
  isAdmin: { type: Boolean, default: false },
  isCustomer: { type: Boolean, default: true }, // Fixed typo from 'isCostomer' to 'isCustomer'
  ownedShop: { type: [String], default: [] }, // Fixed typo from 'onedShop' to 'ownedShop'
  cart: { type: [String], default: [] },
});

export const User = models?.User || model("User", UserSchema);
