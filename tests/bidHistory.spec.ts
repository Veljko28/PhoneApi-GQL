import { v4 } from "uuid"
import { BidHistory } from "../models/BidHistory"

describe("Testing bid histories", () => {

  const history = {
    Id: v4(),
    Bid_Id: v4(),
    UserName: "Testing User",
    Amount: 100
  }

  test("Adding bid history", async () => {
     const bidHistory = new BidHistory(history);

     await bidHistory.save();

     expect((bidHistory as any).Id).toEqual(history.Id);
  })

   test("Finding bid history", async () => {
    const found = await BidHistory.find({Id: history.Id});

    expect(found).toBeTruthy();
    expect(found).toEqual(history);
  })

  test("Removing bid history", async () => {
    await BidHistory.remove(history);

    const found = await BidHistory.find({Id: history.Id});

    expect(found).toBeFalsy();
  })
})