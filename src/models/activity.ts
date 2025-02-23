import mongoose, { Schema, model } from 'mongoose';

export interface IActivity{
    type:"running"|"cycling"|"swimming";
    distance: number;
    duration:number;
    date:string;
}

export const activitySchema = new Schema<IActivity>({
    type: { type: String, enum: ['running', 'cycling', 'swimming'], required: true },
    distance: { type: Number, required: true },
    duration: { type: Number, required: true },
    date: { type: String, required: true }
});

export const activitiesDB = mongoose.model<IActivity>('Activity', activitySchema);