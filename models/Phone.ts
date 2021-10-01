import mongoose, { Schema } from 'mongoose';

export const Phone = mongoose.model("Phone",new Schema({
    Name: String,
    Image: String,
    Description: String,
    DateCreated: Date,
    Seller: String,
    Category: String,
    Brand: String,
    Price: Number,
    Status: String
}));