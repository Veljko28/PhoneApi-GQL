import mongoose, { Schema } from 'mongoose';

export interface IUser extends mongoose.Document {
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
}


export const User = mongoose.model<IUser>("User",new Schema({
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