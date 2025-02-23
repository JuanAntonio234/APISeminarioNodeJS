import mongoose, { Schema, Document } from 'mongoose';

export interface IUser {    
    name: string;
    email: string;
    password:string;
}

export const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

export const userDB = mongoose.model<IUser>('User', userSchema);