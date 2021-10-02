// import { v4 } from 'uuid';
// import { PhoneImage } from '../models/PhoneImage';



// describe("Testing Phone Images", () => {

//   const customImage = {
//     PhoneId: v4(),
//     ImagePath: "path to image"
//   }

//   test("Adding a phone image", async () => {
//       const image = new PhoneImage(customImage);
//       await image.save();

//       expect((image as any).PhoneId).toBe(customImage.PhoneId);
//     })

//   test("Removing a phone image", async () => {
//     await PhoneImage.remove({PhoneId: customImage.PhoneId});

//     const found = await PhoneImage.find({PhoneId: customImage.PhoneId});

//     expect(found).not.toBe(customImage);
//   })
// })