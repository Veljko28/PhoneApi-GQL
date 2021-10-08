import startServer from "../startServer";
import { graphqlTestCall } from "./assets/graphqlTestCall";
import mongoose from 'mongoose';

const addMutation = `
mutation($addToWishListModel: inpWishList) {
  addToWishList(model: $addToWishListModel)
}`;

beforeAll( async () => {
  await startServer();
})

afterAll( async () => {
  await mongoose.connection.close();
})

describe("Testing Wish List", () => {
    test("Adding to wish list", async () => {

       const wishListModel = {
        Id: "1",
        UserId: "2",
        PhoneId: "3",
        Type: "phone"
       }

        const response = await graphqlTestCall(addMutation, {addToWishListModel: wishListModel});

        expect(response).toEqual({data: { addToWishList: true}});
  })

  test("Getting user wish list", async () => {
    const userWishes = await graphqlTestCall(`
      {
        getUserWishes(UserId: "2"){
          Id
          Type
        }
      }
    `);
    const bids = userWishes.data.getUserWishes;

    expect(bids.length).toBeGreaterThan(0);
  })

  test("Check times added to wish list", async () => {
    const timesAdded = await graphqlTestCall(`
      {
        getTimesAddedToWishList(PhoneId: "3")
      }
    `);

    const times = timesAdded.data.getTimesAddedToWishList;

    expect(times).toBeGreaterThan(0);
  })


  test("Deleting the added phone from wish list", async () => {
      const del = await graphqlTestCall(`
      mutation {
        deleteFromWishList(Id: "1")
      }`);

      expect(del).toEqual({data: { deleteFromWishList: true }});
  })

})