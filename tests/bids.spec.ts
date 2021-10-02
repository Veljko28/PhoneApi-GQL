// import startServer from "../startServer"
// import mongoose from 'mongoose';
// import { v4 as uuidv4 } from 'uuid';
// import { Bid } from "../models/Bid";


// beforeAll(async () => {
//   process.env.TEST_SERVER = 'true';
// })

// interface TsBid {
//   _id: {type: String, default: null}
//   Name: String,
//   Image: String,
//   Description: String,
//   DateCreated: Number,
//   Seller: String,
//   Category: String,
//   Brand: String,
//   Price: Number,
//   Status: String,
//   DateEnds: Number
// }


// let testBid = {
//   _id: null,
//   Name: "Test Bid",
//   Image: "",
//   Description: "The Description of the testing bid",
//   DateCreated: Date.now(),
//   Seller: "Admin",
//   Category: "Testing",
//   Brand: "Test",
//   Price: 100,
//   Status: "Running",
//   DateEnds: Date.now() + (30 * 60000)
// }

// describe("Testing Bids", () => {
//   test("Adding Bid and finding it", async () => {
//       const bid = new Bid(testBid);
//       await bid.save();
//       testBid = bid as any;

//       const found = await Bid.find({_id: testBid._id});

//       expect(found).toBeTruthy();
//   })

//   test("Removing Added Bid", async () => {
//     await Bid.remove({_id: testBid._id});

//     const found = await Bid.find({_id: testBid._id});

//     expect(found).not.toBe(testBid);

//   })
// })