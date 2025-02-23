import {Request,Response} from 'express';
import { IActivity } from "../models/activity";

let activities:IActivity[]=[]; 

export const getActivities = (req:Request,res:Response)=>{
    res.status(200).json(activities);
};
/*
export const getActivityById =(req:Request,res:Response)=>{
    const id=parseInt(req.params.id);
    const activity=activities.find((act)=>act.id ===id);
    
    if(!activity){
        return res.status(404).json({ message: "Actividad no encontrada" });
    };
    res.json(activity);
};*/

export const createActivity = (req: Request, res: Response) => {
    const newActivity: IActivity = {
      userId: req.body.userId,
      type: req.body.type,
      distance: req.body.distance,
      duration: req.body.duration,
      date: req.body.date,
    };
    activities.push(newActivity);
    res.status(201).json(newActivity);
};  