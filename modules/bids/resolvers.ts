import { v4 } from 'uuid';
import { Bid, IBid } from '../../models/Bid';

export const resolvers = {
  Query: {
    getBid: async (_: any, args: {id: string}) => {
        const {id} = args;
        const bid = await Bid.findOne({Id: id});
        return bid;  
    },
    getAllBids: async () => {
      return await Bid.find();
    }
  },
  Mutation: {
    addBid: async (_: any, args: {model: IBid}) => {
      const {model} = args;
      const added = new Bid({...model, DateCreated: Date.now(), Id: v4(), Status: 0 });

      try {
        await added.save();
        return true;
      }
      catch(err) {
        console.log(err);
        return false;
      }
    }
  }
} 