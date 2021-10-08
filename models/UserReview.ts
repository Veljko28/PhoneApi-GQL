import mongoose, { Schema } from 'mongoose';

export interface IUserReview extends mongoose.Document {
  Id: String,
  Rating: Number,
  BuyerId: String,
  SellerId: String,
  PhoneId: String,
  DateCreated: Number,
  Message: String
}

export const UserReview = mongoose.model("UserReview", new Schema({
  Id: String,
  Rating: Number,
  BuyerId: String,
  SellerId: String,
  PhoneId: String,
  DateCreated: Number,
  Message: String
}));