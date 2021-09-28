import { Phone } from "../models/Phone";
import startServer from "../startServer";
import 'regenerator-runtime/runtime';
import mongoose from "mongoose";

beforeAll( async () => {
    process.env.TEST_SERVER = 'true';
}) 

afterAll(() => {
  mongoose.connection.close();
})

describe("testing if jest works", () => {

  test("first test should pass", async () => {
    
    const res = await Phone.find();
    console.log(res);
    expect(2+2).toEqual(4);
    await mongoose.connection.close();
  })
})