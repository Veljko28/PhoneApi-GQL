import mongoose, { Schema } from 'mongoose';

export const RefreshToken = mongoose.model("RefreshToken",new Schema({
  JwtId: String,
  Token: String,
  CreateDate: Number,
  Expires: Number,
  Used: Boolean,
  Invalidated: Boolean,
  UserId: String
}));