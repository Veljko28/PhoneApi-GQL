import startServer from "../startServer"
import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Bid } from "../models/Bid";


beforeAll(async () => {
  process.env.TEST_SERVER = 'true';
})

const testBid = {
  Id: uuidv4(),
  Name: "Test Bid",
  Image: "",
  Description: "The Description of the testing bid",
  DateCreated: Date.now(),
  Seller: "Admin",
  Category: "Testing",
  Brand: "Test",
  Price: 100,
  Status: "Running",
  DateEnds: Date.now() + (30 * 60000)
}

describe("Testing Bids", () => {
  test("Adding Bid and finding it", async () => {
      const bid = new Bid(testBid);
      await bid.save();

      const found = await Bid.find({Id: testBid.Id});

      expect(found).toBeTruthy();
  })

  test("Removing Added Bid", async () => {
    await Bid.remove({Id: testBid.Id});

    const found = await Bid.find({Id: testBid.Id});

    expect(found).not.toBe(testBid);

  })
})