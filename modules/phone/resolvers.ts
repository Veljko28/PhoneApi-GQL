import { v4 } from "uuid";
import { Phone } from "../../models/Phone";

interface AddPhoneModel {
  Name: String
  Image: String
  Description: String
  Seller: String
  Category: String
  Brand: String
  Price: Number
}

export const resolvers = {
  Query: {
    getPhone: async (_: any, args: {id: string}) => {
        const {id} = args;
        const phone = await Phone.findOne({Id: id});
        return phone;
    },
    getAllPhones: async () => {
      const phones = await Phone.find();
      return phones;
    }
  },
  Mutation: {
    addPhone: async (_: any, args: {model: AddPhoneModel}) => {
      const {model} = args;
      const fullModel = {
        Id: v4(),
        Status: 0,
        DateCreated: Date.now(),
        ...model,
      }
      const phone = new Phone(fullModel);
       try {
        await phone.save();
        return true;
      }
      catch(err) {return false}
    },
    deletePhone: async (_:any, args: {id: string}) => {
       const {id} = args;

        try { 
          await Phone.deleteOne({id});
          return true;
        }
        catch {
          return false;
        }
    }
  }
}
