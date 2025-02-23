import { activitiesDB, IActivity } from "../models/activity";

export const obtenerEntradas={
    getAllActivities : async()=>{
        return await activitiesDB.find();
    },
    createActivity : async(newActivity:IActivity)=>{
        return await activitiesDB.create(newActivity);
    }
}