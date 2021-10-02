import mongoose, { Schema } from 'mongoose';

export const PhonePurchase = mongoose.model("PhonePurchase",new Schema({
  PhoneId: String,
  SellerId: String,
  BuyerId: String,
  PurchaseDate: Number
}));