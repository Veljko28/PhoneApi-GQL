import { v4 } from "uuid";
import { AuthReq } from "../../auth/AuthReq";
import { IWishList, WishList } from "../../models/WishList";

export const resolvers = {
  Query: {
    getUserWishes: 
    // AuthReq(
      async (_: any, args: {UserId: String}) => {
      return await WishList.find(args); 
    }
    // )
    ,
    getTimesAddedToWishList: 
    // AuthReq(
      async (_: any, args: {PhoneId: String}) => {
      const wishes = await WishList.find(args);
      return wishes.length;
    }
    // )
  },
  Mutation: {
    addToWishList: 
    // AuthReq(
      async (_: any, args: {model: IWishList}) => {
      const {model} = args;
      const wish = new WishList({
        ...model,
        Id: "Id" in model ? model.Id : v4()
      });

      try {
        await wish.save();
        return true;

      } catch(err) {
        console.log(err);
        return false;
      }
    }
    // )
    ,
    deleteFromWishList: 
    // AuthReq(
      async (_: any, args: {Id: String}) => {
      try {
        await WishList.deleteOne(args);
        return true;
      }      
      catch (err) {
        console.log(err);
        return false;
      }
    }
    // )
  }
}