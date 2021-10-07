import startServer from "../startServer";
import { graphqlTestCall } from "./assets/graphqlTestCall";
import mongoose from 'mongoose';

const addMutation = `
mutation($addNotificationModel: inpNotification) {
  addNotification(model: $addNotificationModel)
}`;

beforeAll( async () => {
  await startServer();
})

afterAll( async () => {
  await mongoose.connection.close();
})

describe("Testing Notifications", () => {
    test("Adding a notification", async () => {

       const notificationModel = {
        Id: "1",
        Name: "Testing",
        Type: "test",
        Message: "Testing",
        UserId: "1"
       }

        const response = await graphqlTestCall(addMutation, {addNotificationModel: notificationModel});

        expect(response).toEqual({data: {addNotification: true}});
  })

  test("Finding user notification", async () => {
    const userNotification = await graphqlTestCall(`
    {
      getUserNotifications(UserId: "1") {
        Name
        Message 
      }
    }
    `);
    const notifs = userNotification.data.getUserNotifications;

    expect(notifs.length).toBeGreaterThan(0);
  })


  test("Deleting the added notification", async () => {
      const del = await graphqlTestCall(`
      mutation {
        deleteNotification(id: "1")
      }`);

      expect(del).toEqual({data: { deleteNotification: true }});
  })

})