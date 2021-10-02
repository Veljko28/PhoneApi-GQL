// import { v4 as uuidv4 } from 'uuid';
// import { PhonePurchase } from '../models/PhonePurchase';


// describe("Testing Phone Purchases", () => {

//     const purchase = {
//         Id: uuidv4(),
//         PhoneId: uuidv4(),
//         SellerId: uuidv4(),
//         BuyerId: uuidv4(),
//         PurchaseDate: Date.now()
//     }
    
//     test("Adding Phone Purchase", async () => {
//         const phone = new PhonePurchase(purchase);
//         await phone.save(); 
//     })

//     test("Find Phone Purchase", async () => {
//         const found = await PhonePurchase.find({Id: purchase.Id});
//         expect(found).toBe(purchase);
//     })

//     test("Remove Phone Purcase", async () => {
//         await PhonePurchase.remove({Id: purchase.Id});

//         const find = await PhonePurchase.find({Id: purchase.Id});

//         expect(find).not.toBe(purchase);
//     })
// })