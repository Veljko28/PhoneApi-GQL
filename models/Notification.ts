import mongoose, {mongo, Schema} from 'mongoose';

export const Notification = mongoose.model("Notification", new Schema({
    Name: String,
    Type: String,
    UserId: String,
    Message: String
}));  