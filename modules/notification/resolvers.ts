import { v4 } from 'uuid';
import { Notification, INotification } from '../../models/Notification';


export const resolvers = {
  Query: {
    getUserNotifications: async (_: any, args: {UserId: string}) => {
      const {UserId} = args;
      return await Notification.find({UserId});
    }
  },
  Mutation: {
    addNotification: async (_: any, args: {model: INotification}) => {
      const {model} = args;
      const added = new Notification({...model,Id: 'Id' in model ? model.Id : v4()});

      try {
        await added.save();
        return true;
      }
      catch(err) {
        console.log(err);
        return false;
      }
    },
    deleteNotification: async (_:any, args: {id: string}) => {
        const {id} = args;

        try { 
          await Notification.deleteOne({id});
          return true;
        }
        catch {
          return false;
        }
    },
  }
} 