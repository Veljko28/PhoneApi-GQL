import startServer from "../startServer";
import { graphqlTestCall } from "./assets/graphqlTestCall";
import mongoose from 'mongoose';

const addMutation = `
mutation($addPhoneModel: AddPhoneModel) {
  addPhone(model: $addPhoneModel)
}`;

beforeAll( async () => {
  await startServer();
})

afterAll( async () => {
  await mongoose.connection.close();
})

describe("Testing Phones", () => {
    test("Adding a phone", async () => {

       const phoneModel = {
        Id: '1',
        Name: "Testing phone",
        Description: "test desc",
        Image: "",
        Seller: "neko_tamo",
        Price: 150,
        Category: "Test",
        Brand: "test",
       }

        const response = await graphqlTestCall(addMutation, {addPhoneModel: phoneModel});

        expect(response).toEqual({data: {addPhone: true}});
  })

  test("Finding a phone", async () => {
    const allPhones = await graphqlTestCall(`
      {
        getAllPhones {
          Id
        }
      }
    `);
    const phones = allPhones.data.getAllPhones;

    expect(phones.length).toBeGreaterThan(0);


    const phone = await graphqlTestCall(`
    {
      getPhone(id: "1"){
        Name
      }
    }`);

    const phoneObj = phone.data.getPhone;

    expect(phoneObj.Name).toBeTruthy();
  })


  test("Deleting the added phone", async () => {
      const del = await graphqlTestCall(`
      mutation {
        deletePhone(id: "1")
      }`);

      expect(del).toEqual({data: { deletePhone: true }});
  })

})