import { BidImage } from "../models/BidImage"
import { v4 } from 'uuid';


describe("Testing Bid Images", () => {

  const customImage = {
    Bid_Id: v4(),
    ImagePath: "path to image"
  }

  test("Adding a bid image", async () => {
      const image = new BidImage(customImage);
      await image.save();

      expect((image as any).Bid_Id).toBe(customImage.Bid_Id);
    })

  test("Removing a bid image", async () => {
    await BidImage.remove({Bid_Id: customImage.Bid_Id});

    const found = await BidImage.find({Bid_Id: customImage.Bid_Id});

    expect(found).not.toBe(customImage);
  })
})