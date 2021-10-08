import mongoose, { Schema } from 'mongoose';

export interface IPhonePurchase extends mongoose.Document {
  Id: String,
  PhoneId: String,
  SellerId: String,
  BuyerId: String,
  PurchaseDate: Number
}

export const PhonePurchase = mongoose.model("PhonePurchase",new Schema({
  Id: String,
  PhoneId: String,
  SellerId: String,
  BuyerId: String,
  PurchaseDate: Number
}));