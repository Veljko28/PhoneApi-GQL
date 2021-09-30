import mongoose, {mongo, Schema} from 'mongoose';

export const ContactSupport = mongoose.model("ContactSupport", new Schema({
  Id: String,
  Name: String,
  Email: String,
  Subject: String,
  Message: String
}));  