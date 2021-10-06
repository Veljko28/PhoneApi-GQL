import { graphqlTestCall } from "./assets/graphqlTestCall";
import { User } from "../models/User";
import startServer from '../startServer';
import mongoose, { mongo } from 'mongoose';

const registerMutation = `
  mutation($registerRegisterForm: RegisterForm!){
    register(registerForm: $registerRegisterForm)
  }
`;

const loginMutation = `
  mutation($loginInfo: UserInfo!){
    login(info: $loginInfo) {
      accessToken
    }
}`;

const deleteMutation = `
  mutation {
    deleteUser(id: "1")
  }`;

const findUserQuery = `
  {
  getUser(id: "1"){
    EmailConfirmed
  }
}`

const updateUserMutation = `
mutation($updateUserUser: updateUser) {
  updateUser(user: $updateUserUser)
}`

let userModel = {
      Id: "1",
      UserName: "integrated_test",
      Email: "integrated_test@gmail.com",
      Description: "",
      PhoneNumber: null,
      Phones_sold: null,
      Rating: 0,
      EmailConfirmed: true,
      LoyalityPoints: null
}

beforeAll( async () => {
  await startServer();
})

afterAll( async () => {
  await mongoose.connection.close();
})

describe("Testing User Methods", () => {
  test("Registering a user", async () => {
      const registerForm = {
        Id: '1',
        userName: "integrated_test",
        email: "integrated_test@gmail.com",
        password: "int_testing123",
        confirm_password: "int_testing123"
      }

      const registerResponse = await graphqlTestCall(registerMutation, {registerRegisterForm: registerForm});

      expect(registerResponse).toEqual({data: {register: true} }); 
  })

  test("Login the registered user", async () => {
      const loginForm = {
        email: "integrated_test@gmail.com",
        password: "int_testing123"
      };

      const loginResponse = await graphqlTestCall(loginMutation, {loginInfo: loginForm});

      expect(loginResponse.data.login).not.toBeNull();
  })

  test("Update the added user", async () => {
    const upd = await graphqlTestCall(updateUserMutation, {updateUserUser: {...userModel} });

    expect(upd).toEqual({data: { updateUser: true }});
  })

  test("Find the added user", async () => {
    const addedUser = await graphqlTestCall(findUserQuery);

    expect(addedUser).toEqual({data: { getUser: { EmailConfirmed: true } }});
  })


  test("Delete the added user", async () => {

    const deleteResponse = await graphqlTestCall(deleteMutation);

    expect(deleteResponse).toEqual({ data: { deleteUser: true }});
  })
})