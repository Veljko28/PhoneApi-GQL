import startServer from "../startServer";
import { graphqlTestCall } from "./assets/graphqlTestCall";
import mongoose from 'mongoose';
import { PhonePurchase } from "../models/PhonePurchase";

const addMutation = `
mutation($addPurchaseModel: inpPhonePurchase) {
  addPurchase(model: $addPurchaseModel)
}`;

beforeAll( async () => {
  await startServer();
})

afterAll( async () => {
  try {
    await PhonePurchase.deleteOne({Id: "1"});
  }
  catch (err) {
    console.log(err);
  }
  await mongoose.connection.close();
})

describe("Testing Phone Purchases", () => {
    test("Adding a purchase", async () => {

       const purchaseModel = {
        Id: '1',
        PhoneId: "4",
        BuyerId: "2",
        SellerId: "3",
       }

        const response = await graphqlTestCall(addMutation, {addPurchaseModel: purchaseModel});

        expect(response).toEqual({data: {addPurchase: true}});
  })

  test("Finding purchases made by user", async () => {
    const userPurchases = await graphqlTestCall(`
     {
      getPhonesPurchasedByUser(BuyerId: "2") {
        PhoneId
      }
    }
    `);
    const purchases = userPurchases.data.getPhonesPurchasedByUser;

    expect(purchases.length).toBeGreaterThan(0);
  })

})