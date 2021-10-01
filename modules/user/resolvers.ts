import { User } from '../../models/User';

interface LoginForm {
    UserName: String,
    Password: String
}

interface RegisterForm {
    UserName: String,
    Email: String,
    Password: String,
    Confirm_Password: String
}


const resolver = {
    Query: {
        getUser: async (_: any, {_id}: {_id: string}) => {
            const user = await User.find({_id});
            return user;
        }
    },
    Mutation: {
        login: async (_: any, {user} : {user: LoginForm}) => {
            // check for username / get user by username

            // bcrypt the given password and compare with one in db
        },
        register: async (_: any, {user}: {user: RegisterForm}) => {
            // check if username in use 

            // check if email in use

            // create user
        } 
    }
}