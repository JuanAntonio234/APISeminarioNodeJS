import{Router, Request,Response} from "express";
import { getActivities,/*getActivityById,*/createActivity } from "../controllers/activityController";

const router=Router();

/**
 * @swagger
 * /api/activities:
 *   get:
 *     summary: Obtiene todas las actividades
 *     tags: [Activities]
 *     responses:
 *       200:
 *         description: Lista de actividades obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   type:
 *                     type: string
 *                     enum: [running, cycling, swimming]
 *                     example: "running"
 *                   distance:
 *                     type: number
 *                     example: 5
 *                   duration:
 *                     type: number
 *                     example: 30
 *                   date:
 *                     type: string
 *                     example: "2024-02-23"
 */
router.get('/', getActivities);

//router.get('/:id',getActivityById);

/**
 * @swagger
 * /api/newActivity:
 *   post:
 *     summary: Crea una nueva actividad
 *     tags: [Activities]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *                 enum: [running, cycling, swimming]
 *               distance:
 *                 type: number
 *               duration:
 *                 type: number
 *               date:
 *                 type: string
 *     responses:
 *       201:
 *         description: Actividad creada exitosamente
 */
router.post('/',createActivity);

export default router;