import mongoose, {mongo, Schema} from 'mongoose';

export const ConctactSupport = mongoose.model("ConctactSupport", new Schema({
  Id: String,
  Name: String,
  Email: String,
  Subject: String,
  Message: String
}));  