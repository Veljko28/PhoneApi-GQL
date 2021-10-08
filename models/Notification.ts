import mongoose, {mongo, Schema} from 'mongoose';

export interface INotification extends mongoose.Document {
    Id: string,
    Name: string,
    Type: string,
    UserId: string,
    Message: string
}

export const Notification = mongoose.model("Notification", new Schema({
    Id: String,
    Name: String,
    Type: String,
    UserId: String,
    Message: String
}));  