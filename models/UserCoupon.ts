import mongoose, { Schema } from 'mongoose';

export const UserCoupon = mongoose.model("UserCoupon", new Schema({
  UserId: String,
  Coupon: String,
  Amount: Number,
  Valid: Boolean
}));