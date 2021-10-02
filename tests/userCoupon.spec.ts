// import { v4 as uuidv4 } from 'uuid';
// import { UserCoupon } from '../models/UserCoupon';

// const coupon = {
//     Id: uuidv4(),
//     UserId: uuidv4(),
//     Coupon: uuidv4(),
//     Amount: 20,
//     Valid: true
// };

// describe("Testing User Coupon", () => {
//     test("Adding a user coupon", async () => {
//         const cpn = new UserCoupon(coupon);
//         await cpn.save();
//     })

//     test("Find coupon and use", async () => {
//         const found: any = await UserCoupon.find({JwtId: coupon.Id});
//         expect(found).toBe(coupon);
//         found.Valid = true;
//         await found.save();
//     })

//     test("Should be invalidated after use and removed", async () => {
//         const found: any = await UserCoupon.find({JwtId: coupon.Id});
//         expect(found.Valid).toBeFalsy();

//         await UserCoupon.remove({JwtId: coupon.Id});
//         const find: any = await UserCoupon.find({JwtId: coupon.Id});
        
//         expect(find).not.toBe(found);
//     })

// })