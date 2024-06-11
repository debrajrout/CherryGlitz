import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: String,
  image: String,
  emailVerified: Date,
  location: String,
  liked: Array,
  isAdmin: Boolean,
  isCostomer: Boolean,
  onedShop: Array,
  cart: Array,
});

export const User = models?.User || model("User", UserSchema);
