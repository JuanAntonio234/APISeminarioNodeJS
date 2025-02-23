import {Request,Response} from 'express';
import { obtenerEntradas } from '../services/activityService';
import { IActivity } from '../models/activity';

export const getActivities = async (req: Request, res: Response) => {
        try {
            const activities = await obtenerEntradas.getAllActivities();
            console.log("Actividades obtenidas:", activities); 
            
            res.status(200).json(activities);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener las actividades", error });
        }
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

export const createActivity = async (req: Request, res: Response) => {
    try {
        const newActivity: IActivity = {
            type: req.body.type,
            distance: req.body.distance,
            duration: req.body.duration,
            date: req.body.date,
        };

        await obtenerEntradas.createActivity(newActivity);
        res.status(201).json({ message: "Creado con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error al crear la actividad", error });
    }
};  