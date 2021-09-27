import mongoose, {Schema} from 'mongoose';

export const PhoneImage = mongoose.model("PhoneImage", new Schema({
  PhoneId: String,
  ImagePath: String
}))