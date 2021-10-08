import mongoose, { Schema } from 'mongoose';

export interface IBid extends mongoose.Document {
    Id?: String
    Name: String,
    Image: String,
    Description: String,
    DateCreated: Date,
    Seller: String,
    Category: String,
    Brand: String,
    Price: Number,
    DateEnds: Date 
} 

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
    Status: Number,
    DateEnds: Date
}));