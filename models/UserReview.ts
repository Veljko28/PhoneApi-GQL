import mongoose, { Schema } from 'mongoose';

export const UserReview = mongoose.model("UserReview", new Schema({
  Rating: Number,
  BuyerId: String,
  SellerId: String,
  PhoneId: String,
  DateCreated: Date,
  Message: String
}));