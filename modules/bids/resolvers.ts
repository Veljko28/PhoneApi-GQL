import { v4 } from 'uuid';
import { Bid, IBid } from '../../models/Bid';

type id = {
  Id: Number
}

type updateBid = IBid & id

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
      const added = new Bid({...model, DateCreated: Date.now(), 
        Id: model.Id !== null ? model.Id : v4(),
        Status: 0 });

      try {
        await added.save();
        return true;
      }
      catch(err) {
        console.log(err);
        return false;
      }
    },

    updateBid: async (_: any, args: {bid: updateBid}) => {
      const {bid} = args;
      
      await Bid.updateOne({id: bid.Id}, bid).catch(err => {
        console.log(err);
        return false;
      })

      return true;
    },

    deleteBid: async (_:any, args: {id: string}) => {
        const {id} = args;

        try { 
          await Bid.deleteOne({id});
          return true;
        }
        catch {
          return false;
        }
    },
  }
} 