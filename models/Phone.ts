import mongoose, { Schema } from 'mongoose';

export const Phone = mongoose.model("Phone",new Schema({
    Id: String,
    Name: String,
    Image: String,
    Description: String,
    DateCreated: Number,
    Seller: String,
    Category: String,
    Brand: String,
    Price: Number,
    Status: String
}));