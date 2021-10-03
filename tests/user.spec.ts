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

let deleteMutation = `
  mutation {
    delete(id: "")
  }`;


beforeAll( async () => {
  await startServer();
})

afterAll( async () => {
  await mongoose.connection.close();
})

describe("Testing User Methods", () => {
  test("Registering a user", async () => {
      const registerForm = {
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

      const {accessToken, userId} = loginResponse.data.login;

       deleteMutation = `
        mutation {
          delete(id: "${userId}")
        }`;

      expect(loginResponse.data.login).not.toBeNull();
  })

  test("Delete the added user", async () => {

    const deleteResponse = await graphqlTestCall(deleteMutation);

    expect(deleteResponse).toEqual({ data: {delete: true }});
  })
})