import mongoose, { Schema } from 'mongoose';

export const WishList = mongoose.model("WishList", new Schema({
  Id: String,
  UserId: String,
  PhoneId: String,
  Type: String
}));