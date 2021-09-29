import mongoose, { Schema } from 'mongoose';

export const UserCoupon = mongoose.model("UserCoupon", new Schema({
  Id: String,
  UserId: String,
  Coupon: String,
  Amount: Number,
  Valid: Boolean
}));