import mongoose, { Schema } from 'mongoose';

export const PhonePurchase = mongoose.model("PhonePurchase",new Schema({
  Id: String,
  PhoneId: String,
  SellerId: String,
  BuyerId: String,
  PurchaseDate: Date
}));