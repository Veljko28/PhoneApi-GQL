import mongoose, { Schema } from 'mongoose';

export const User = mongoose.model("User",new Schema({
    Id: String,
    Email: String,
    UserName: String,
    Password: String,
    Description: String,
    Rating: Number,
    PhoneNumber: String,
    Phones_sold: Number,
    EmailConfirmed: Boolean,
    LoyalityPoints: Number
}));