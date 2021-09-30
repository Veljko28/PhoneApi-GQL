import { v4 as uuidv4 } from 'uuid';
import { ContactSupport } from '../models/ContactSupport';


describe("Contact Support Tests", () => {

    const contact = {
        Id: uuidv4(),
        Name: "Test User",
        Email: "test@mobistore.com",
        Subject: "Testing",
        Message: "Testing the contact message"
    }

    test("Adding Contact Message", async () => {
        const cnt = new ContactSupport(contact);
        await cnt.save();        
    })

    test("Finding Contact Message", async () => {
        const cnct = await ContactSupport.find({Id: contact.Id});

        expect(cnct).toBe(contact);
    })

    test("Remove Contact Message", async () => {
        await ContactSupport.remove({Id: contact.Id});

        const found = await ContactSupport.find({Id: contact.Id});
        expect(found).not.toBe(contact);
    })
})