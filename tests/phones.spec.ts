import startServer from "../startServer"
import mongoose from 'mongoose';
import { Phone } from "../models/Phone";
import { v4 as uuidv4 } from 'uuid';

beforeAll( async () => {
  await startServer();
}) 

const testPhone = {
  Id: uuidv4(),
  Name: "Test Phone",
  Image: "",
  Description: "The Description of the testing phone",
  DateCreated: Date.now(),
  Seller: "Admin",
  Category: "Testing",
  Brand: "Test",
  Price: 100,
  Status: "Running"
}

describe("Testing Phones", () => {
  test("Adding Phone and finding it", async () => {
      const phone = new Phone(testPhone);
      await phone.save();

      const found = await Phone.find({Id: testPhone.Id});

      expect(found).toBeTruthy();
  })

  test("Removing Added Phone", async () => {

    await Phone.remove({Id: testPhone.Id});

    const found = await Phone.find({Id: testPhone.Id});

    expect(found).not.toBe(testPhone);

  })
})