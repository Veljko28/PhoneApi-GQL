import { User, IUser } from '../../models/User';
import * as yup from 'yup';
import bcrypt from 'bcryptjs';
import { CreateAccessToken } from '../../auth/CreateAccessToken';
import { v4 } from 'uuid';

interface RegisterForm {
  userName: string,
  email: string,
  password: string,
  confirm_password: string
}

type userType = IUser;

const yupSchema = yup.object().shape( {
    email: yup.string().min(10).max(255).email(),
    userName: yup.string().min(5).max(100),
    password: yup.string().min(6).max(255),
    confirm_password: yup.string().min(6).max(255),
}) 

export const resolvers = {
  Query: {
    getUser: async (_: any, args: {id: string}) => {
      const {id} = args;

      const user: any = await User.findOne({Id: id});
      
      return {
        UserName: user.UserName,
        Email: user.Email,
        Description: user.Description,
        Rating: user.Rating,
        EmailConfirmed: user.EmailConfirmed
      };
    },
    getAllUsers: async () => {
      const allUsers = await User.find();

      return allUsers;
    }
  },
  Mutation: {
    register: async (_: any, args: {registerForm: RegisterForm}) => {
      
      const {registerForm} = args;
      
      try {
             await yupSchema.validate(registerForm, { abortEarly: false });
      } 
      catch (err) {return false}
      
      if ( registerForm.confirm_password !== registerForm.password) return false;

      const hashedPassword = bcrypt.hashSync(registerForm.password, 10);

      const userSchema = {
        Id: v4(),
        Email: registerForm.email,
        UserName: registerForm.userName,
        Password: hashedPassword,
        Description: "",
        Rating: 0,
        PhoneNumber: "",
        Phones_sold: 0,
        EmailConfirmed: false,
        LoyalityPoints: 0
      };


      // const found = await User.find({email: registerForm.email});
      // console.log(found);

      // if (found !== null) { // if the email is already in use
      //   return false;
      // }
   
      const user = new User(userSchema);
      await user.save();

      return true;
    },
    
    login: async (_: any,args: {info: {email: string,password: string}}) => {

      try {
            await yupSchema.validate(args.info, {abortEarly: false});
          }
          catch (err){
              return null;
          }

          const {email, password} = args.info;

          const user = await User.findOne({email});

         if (user === null) return null;

          bcrypt.compare(password, (user as any).password , (err) => {
              if (err){
                    return null;
                }
            })

      return {
        accessToken: CreateAccessToken(user.id, '15m'),
        userId: user.id
      };            
    },

    deleteUser: async (_:any, args: {id: string}) => {
        const {id} = args;

        try { 
          await User.deleteOne({id});
          return true;
        }
        catch {
          return false;
        }
    },


    updateUser: async (_: any, args: {user: userType}) => {
      const {user} = args;
      
      await User.updateOne({id: user.Id}, user).catch(err => {
        console.log(err);
        return false;
      })

      return true;
    } 

  }
}