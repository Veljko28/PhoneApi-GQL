import {isAuth} from './isAuth';
import { combineResolvers as combine, IFieldResolver } from 'graphql-resolvers';
import {MyContext} from '../types/MyContext';


export const AuthReq: (func: any) => IFieldResolver<any,MyContext,any,any>  = (func: any) => {
    return combine(isAuth, func);
};