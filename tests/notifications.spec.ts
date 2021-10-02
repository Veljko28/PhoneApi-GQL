// import { v4 as uuidv4 } from 'uuid';
// import { Notification } from '../models/Notification';
// import startServer from '../startServer';

// describe("Notifcations Tests", () => {

//     const notification = {
//         Id: uuidv4(),
//         Name: "Test phone has been sold",
//         Type: "phone",
//         UserId: uuidv4(),
//         Message: "Your test phone has successfully been sold."
//     }

//     const notification2 = {
//         Id: uuidv4(),
//         Name: "Test phone 2 has been sold",
//         Type: "phone",
//         UserId: notification.UserId,
//         Message: "Your test phone 2 has successfully been sold."
//     }

//     test("Adding New Notification", async () => {
//         const ntf = new Notification(notification);
//         await ntf.save(); 
        
//         const ntf2 = new Notification(notification2);
//         await ntf2.save();

//         expect(ntf).toBeTruthy();
//     })

//     test("Finding Added Notification", async () => {
//         const ntft = await Notification.find({Id: notification.Id});

//         expect(ntft).toHaveLength(2);
//     })

//     test("Find User Notifications", async () => {
//         const userNotifications = await Notification.find({UserId: notification.UserId });

//         expect(userNotifications).toBe([notification, notification2]);
//     })

//     test("Remove Added Notifications", async () => {
//         await Notification.remove({Id: notification.Id});
//         const rmFound = await Notification.find({Id: notification.Id});

//         expect(rmFound).not.toBe(notification);

//         await Notification.remove({Id: notification2.Id});
//         const rmFound2 = await Notification.find({Id: notification2.Id});

//         expect(rmFound2).not.toBe(notification2);
//     }) 
// })