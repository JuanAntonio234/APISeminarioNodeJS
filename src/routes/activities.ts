import{Router, Request,Response} from "express";
import { getActivities,/*getActivityById,*/createActivity } from "../controllers/activityController";

const router=Router();

router.get('/',getActivities);
//router.get('/:id',getActivityById);
router.post('/',createActivity);

export default router;