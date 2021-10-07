import { v4 } from 'uuid';
import { ContactSupport, IContactSupport } from '../../models/ContactSupport';

export const resolvers = {
  Query: {
    getContacts: async () => {
      return await ContactSupport.find();
    } 
  },
  Mutation: {
    addContact: async (_:any, args: {model: IContactSupport}) => {
      const { model } = args;
      try {
        const contact = new ContactSupport({...model,Id: 'Id' in model ? model.Id : v4()});
        await contact.save();

        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
    deleteContact: async (_:any, args: {id: string}) => {
       const {id} = args;

        try { 
          await ContactSupport.deleteOne({id});
          return true;
        }
        catch {
          return false;
        }
    }
  }
}