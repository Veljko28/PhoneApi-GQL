import mongoose, {mongo, Schema} from 'mongoose';

export interface IContactSupport extends mongoose.Document {
  Id: String,
  Name: String,
  Email: String,
  Subject: String,
  Message: String
}

export const ContactSupport = mongoose.model("ContactSupport", new Schema({
  Id: String,
  Name: String,
  Email: String,
  Subject: String,
  Message: String
}));  