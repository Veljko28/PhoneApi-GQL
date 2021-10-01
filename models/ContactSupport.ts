import mongoose, {mongo, Schema} from 'mongoose';

export const ContactSupport = mongoose.model("ContactSupport", new Schema({
  Name: String,
  Email: String,
  Subject: String,
  Message: String
}));  