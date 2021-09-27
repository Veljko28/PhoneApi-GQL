import mongoose, { Schema } from 'mongoose';

export const Bid = mongoose.model("Bid",new Schema({
    Id: String,
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