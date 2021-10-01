import { Phone } from '../../models/Phone';

interface TsPhone {
    _id: {type: String, default: null},
    Name: String,
    Image: String,
    Description: String,
    DateCreated: Date,
    Seller: String,
    Category: String,
    Brand: String,
    Price: Number,
    Status: String
}

const reslovers = {
    Query: {
        get_phone: async (_: any, {Id}: {Id: string}) => {
            const phone = await Phone.find({Id});
            return phone;
        },
    },
    Mutation: {
        add_phone: async (_: any, phone: TsPhone) => {
            const newPhone = new Phone(phone);
            await newPhone.save();
    
            const added = await Phone.find({_id: phone._id});
            
            if (added === null || added === undefined){
                return false;
            }
    
            return true;
        },
        edit_phone: async (_: any, updated: TsPhone) => {
            await Phone.findOneAndUpdate({_id: updated._id}, updated);
    
            const phone = await Phone.find({_id: updated._id});
    
            return (phone as any) === updated;
        }

    }
}