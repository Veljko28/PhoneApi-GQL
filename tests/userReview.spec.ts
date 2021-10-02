// import { v4 as uuidv4 } from 'uuid';
// import { UserReview } from '../models/UserReview';

// const review = {
//     Id: uuidv4(),
//     Rating: 5,
//     BuyerId: uuidv4(),
//     SellerId: uuidv4(),
//     PhoneId: uuidv4(),
//     DateCreated: Date.now(),
//     Message: "This is a review for testing"
// };

// const review2 = {
//     Id: uuidv4(),
//     Rating: 4,
//     BuyerId: uuidv4(),
//     SellerId: review.SellerId,
//     PhoneId: uuidv4(),
//     DateCreated: Date.now(),
//     Message: "This is a review for testing 2"
// };

// describe("Testing User Reviews", () => {
//     test("Adding a user review", async () => {
//         const urw = new UserReview(review);
//         await urw.save();

//         const urw2 = new UserReview(review2);
//         await urw2.save();
//     })

//     test("Find a review", async () => {
//         const found: any = await UserReview.find({Id: review.Id});
//         expect(found).toBe(review);
//     })

//     test("Find all seller reviews", async () => {
//         const found: any = await UserReview.find({SellerId: review.SellerId});

//         expect(found).toBe([review,review2]);
//     })

//     test("Remove added reviews", async () => {
//         await UserReview.remove({Id: review.Id});
//         await UserReview.remove({Id: review2.Id});

//         const found: any = await UserReview.find({Id: review.Id});
//         expect(found).not.toBe(review);
        
//         const found2: any = await UserReview.find({Id: review2.Id});
//         expect(found2).not.toBe(review2);
//     })

// })