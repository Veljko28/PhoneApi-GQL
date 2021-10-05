import startServer from "../startServer";
import { graphqlTestCall } from "./assets/graphqlTestCall";
import mongoose from 'mongoose';

const addMutation = `
mutation($addPhoneModel: AddPhoneModel) {
  addPhone(model: $addPhoneModel)
}`;

let phoneId: string;

beforeAll( async () => {
  await startServer();
})

afterAll( async () => {
  await mongoose.connection.close();
})

describe("Testing Phones", () => {
    test("Adding a phone", async () => {

       const phoneModel = {
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
    console.log(allPhones.data.getAllPhones);
    const {phones} = allPhones.data.getAllPhones;

    expect(phones.length).toBeGreaterThan(0);

    phoneId = phones[0].Id;

    const phone = await graphqlTestCall(`
    {
      getPhone(id: "${phoneId}"){
        Name
      }
    }`);

    const {phoneObj} = phone.data.getPhone;

    expect(phoneObj.Name).toBeTruthy();
  })


  test("Deleting the added phone", async () => {
      const del = await graphqlTestCall(`
      mutation {
        deletePhone(id: "${phoneId}")
      }`);

      expect(del).toEqual({data: { deletePhone: true }});
  })

})