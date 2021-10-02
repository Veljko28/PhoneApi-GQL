// import startServer from "../startServer"
// import mongoose from 'mongoose';
// import { Phone } from "../models/Phone";
// import { v4 as uuidv4 } from 'uuid';


// beforeAll(async () => {
//   process.env.TEST_SERVER = 'true';
// })

// interface TsPhone {
//     _id: {type: String, default: null},
//     Name: String,
//     Image: String,
//     Description: String,
//     DateCreated: Number,
//     Seller: String,
//     Category: String,
//     Brand: String,
//     Price: Number,
//     Status: String
// }

// let testPhone: TsPhone = {
//   _id: null,
//   Name: "Test Phone",
//   Image: "",
//   Description: "The Description of the testing phone",
//   DateCreated: Date.now(),
//   Seller: "Admin",
//   Category: "Testing",
//   Brand: "Test",
//   Price: 100,
//   Status: "Running"
// }

// describe("Testing Phones", () => {
//   test("Adding Phone and finding it", async () => {
//       const phone = new Phone(testPhone);
//       await phone.save();
//       testPhone = phone as any;

//       const found = await Phone.find({_id: phone._id});

//       expect(found).toBeTruthy();
//   })

//   test("Removing Added Phone", async () => {
//     await Phone.remove({_id: testPhone._id});

//     const found = await Phone.find({_id: testPhone._id});

//     expect(found).not.toBe(testPhone);

//   })
// })