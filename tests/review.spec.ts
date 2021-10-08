import startServer from "../startServer";
import { graphqlTestCall } from "./assets/graphqlTestCall";
import mongoose from 'mongoose';
import { UserReview } from "../models/UserReview";

const addMutation = `
mutation($addReviewModel: inpUserReview) {
  addReview(model: $addReviewModel)
}`;

beforeAll( async () => {
  await startServer();
})

afterAll( async () => {
  try {
    await UserReview.deleteOne({Id: "1"});
  }
  catch (err) {
    console.log(err);
  }
  await mongoose.connection.close();
})

describe("Testing User Review", () => {
    test("Adding a review", async () => {

       const reviewModel = {
        Id: '1',
        BuyerId: "2",
        SellerId: "3",
        PhoneId: "4",
        Rating: 5,
        Message: "Testing in jest"
       }

        const response = await graphqlTestCall(addMutation, {addReviewModel: reviewModel});

        expect(response).toEqual({data: {addReview: true}});
  })

  test("Finding all the user reviews", async () => {
    const allReviews = await graphqlTestCall(`
     {
      getUserReviews(UserId: "3") {
        Id
      }
    }
    `);
    const bids = allReviews.data.getUserReviews;

    expect(bids.length).toBeGreaterThan(0);
  })


  test("Check if the user has reviewed a phone", async () => {
      const del = await graphqlTestCall(`
      {
        checkReviewed(BuyerId: "2", PhoneId: "4")
      }`);

      expect(del).toEqual({data: { checkReviewed: true }});
  })

})