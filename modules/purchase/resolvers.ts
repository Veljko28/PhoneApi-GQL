import { v4 } from "uuid";
import { IPhonePurchase, PhonePurchase } from "../../models/PhonePurchase"
import { AuthReq } from "../../auth/AuthReq";

export const resolvers = {
  Query: {
    getPhonesPurchasedByUser: 
    // AuthReq(
      async (_: any, args: {BuyerId: String}) => {
      return await PhonePurchase.find(args);
    }
    // ) 
  },
  Mutation: {
    addPurchase: 
    // AuthReq(
      async (_: any, args: {model: IPhonePurchase}) => {
      const {model} = args;
      const purchase = new PhonePurchase({...model,
      Id: "Id" in model ? model.Id : v4(),
      PurchaseDate: Date.now() 
    });

      try {
        await purchase.save();
        return true;
      }
      catch(err){
        console.log(err);
        return false;
      }

    }
    // )
  }
}