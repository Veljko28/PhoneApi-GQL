import startServer from "../startServer";
import { graphqlTestCall } from "./assets/graphqlTestCall";
import mongoose from 'mongoose';

const addMutation = `
mutation($addContactModel: inpContact) {
  addContact(model: $addContactModel)
}`;

beforeAll( async () => {
  await startServer();
})

afterAll( async () => {
  await mongoose.connection.close();
})

describe("Testing Contact Support", () => {
    test("Adding a contact", async () => {

       const contactModel = {
        Id: "1",
        Name: "Testing",
        Email: "test@gmail.com",
        Subject: "About testing",
        Message: "Testing"
       }

        const response = await graphqlTestCall(addMutation, {addContactModel: contactModel});

        expect(response).toEqual({data: {addContact: true}});
  })

  test("Getting all contacts", async () => {
    const cncts = await graphqlTestCall(`
    {
      getContacts {
        Name
        Message 
      }
    }
    `);
    const contacts = cncts.data.getContacts;

    expect(contacts.length).toBeGreaterThan(0);
  })


  test("Deleting the added notification", async () => {
      const del = await graphqlTestCall(`
      mutation {
        deleteContact(id: "1")
      }`);

      expect(del).toEqual({data: { deleteContact: true }});
  })

})