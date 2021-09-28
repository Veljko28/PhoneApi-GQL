import mongoose, { Schema } from 'mongoose';

export const BidHistory = mongoose.model("BidHistory", new Schema({
    Id: String,
    Bid_Id: String,
    UserName: String,
    Amount: Number
}));