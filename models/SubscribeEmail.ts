import mongoose, { Schema } from 'mongoose';

export const SubscribeEmail = mongoose.model("SubscribeEmail", new Schema({
  Email: String
}));