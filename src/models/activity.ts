import mongoose, { Schema, Document } from 'mongoose';

export interface IActivity{
    userId:number;
    type:"running"|"cycling"|"swimming";
    distance: number;
    duration:number;
    date:string;
}

const activitySchema = new Schema<IActivity>({
    userId: { type: Number, required: true },
    type: { type: String, enum: ['running', 'cycling', 'swimming'], required: true },
    distance: { type: Number, required: true },
    duration: { type: Number, required: true },
    date: { type: String, required: true }
});

export default mongoose.model<IActivity>('Activity', activitySchema);