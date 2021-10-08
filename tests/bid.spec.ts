import startServer from "../startServer";
import { graphqlTestCall } from "./assets/graphqlTestCall";
import mongoose from 'mongoose';

const addMutation = `
mutation($addBidModel: inpBid) {
  addBid(model: $addBidModel)
}`;

beforeAll( async () => {
  await startServer();
})

afterAll( async () => {
  await mongoose.connection.close();
})

describe("Testing Bids", () => {
    test("Adding a bid", async () => {

       const bidModel = {
        Id: '1',
        Name: "Testing bid",
        Description: "test desc",
        Image: "",
        Seller: "neko_tamo",
        Price: 200,
        Category: "Test",
        Brand: "test",
        DateEnds: Date.now() + 50000
       }

        const response = await graphqlTestCall(addMutation, {addBidModel: bidModel});

        expect(response).toEqual({data: {addBid: true}});
  })

  test("Finding a bid", async () => {
    const allBids = await graphqlTestCall(`
      {
        getAllBids {
          Id
        }
      }
    `);
    const bids = allBids.data.getAllBids;

    expect(bids.length).toBeGreaterThan(0);


    const bid = await graphqlTestCall(`
    {
      getBid(id: "1"){
        Name
      }
    }`);

    const bidObj = bid.data.getBid;

    expect(bidObj.Name).toBeTruthy();
  })


  test("Deleting the added bid", async () => {
      const del = await graphqlTestCall(`
      mutation {
        deleteBid(id: "1")
      }`);

      expect(del).toEqual({data: { deleteBid: true }});
  })

})