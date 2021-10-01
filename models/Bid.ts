import mongoose, { Schema } from 'mongoose';

export const Bid = mongoose.model("Bid",new Schema({
    Name: String,
    Image: String,
    Description: String,
    DateCreated: Date,
    Seller: String,
    Category: String,
    Brand: String,
    Price: Number,
    Status: String,
    DateEnds: Date
}));