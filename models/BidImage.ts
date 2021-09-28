import mongoose, {mongo, Schema} from 'mongoose';

export const BidImage = mongoose.model("BidImage", new Schema({
  Bid_Id: String,
  ImagePath: String
}));  