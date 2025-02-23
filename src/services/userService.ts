import { userDB, IUser } from "../models/user";

export const obtenerEntradas={
    getAllUsers : async()=>{
        return await userDB.find();
    },
    createUser : async(newUser:IUser)=>{
        return await userDB.create(newUser);
    }
}