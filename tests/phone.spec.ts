import { graphqlTestCall } from "./assets/graphqlTestCall";

const addMutation = `
mutation {
  addPhone(model: {
    Name: "Testing phone",
    Description: "test desc",
    Image: "",
    Seller: "neko_tamo",
    Price: 150,
    Category: "Test",
    Brand: "test",
  })
}`;

const deleteMutation = `
`

describe("Testing Phones", () => {
    test("Adding a phone", async () => {
        const response = await graphqlTestCall(addMutation);

        expect(response).toEqual({data: {addPhone: true}});
  })


  test("Deleting the added phone", async () => {

  })

})