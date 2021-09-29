import mongoose, { Schema } from 'mongoose';

export const SubscribeEmail = mongoose.model("SubscribeEmail", new Schema({
  Id: String,
  Email: String
}));