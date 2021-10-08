import mongoose, { Schema } from 'mongoose';

export interface IWishList extends mongoose.Document {
  Id: String,
  UserId: String,
  PhoneId: String,
  Type: String
}

export const WishList = mongoose.model("WishList", new Schema({
  Id: String,
  UserId: String,
  PhoneId: String,
  Type: String
}));