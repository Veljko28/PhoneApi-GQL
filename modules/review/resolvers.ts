import { v4 } from "uuid";
import { IUserReview, UserReview } from "../../models/UserReview"
import { AuthReq } from "../../auth/AuthReq";  

export const resolvers = {
  Query: {
    getUserReviews: async (_ :any, args: {UserId: String}) => {
      const { UserId } = args;
      const reviews = await UserReview.find({SellerId: UserId}); 
      return reviews;
    },
    checkReviewed: async (_: any, args: {BuyerId: String, PhoneId: String}) => {
      const { BuyerId, PhoneId } = args;
      const reviewed = await UserReview.find({BuyerId, PhoneId});
      return reviewed.length !== 0;
    }
  },
  Mutation: {
    addReview: 
    // AuthReq(
      async (_: any, args: {model: IUserReview}) => {
      const { model } = args;
      const review = new UserReview({...model,
      Id: "Id" in model ? model.Id : v4(),
      DateCreated: Date.now() });

      try {
        await review.save();
        return true;
      }
      catch(err) {
        console.log(err);
        return false;
      }
    }
    // )
    ,

  }
}