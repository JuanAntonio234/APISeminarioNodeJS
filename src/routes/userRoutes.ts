import{Router, Request,Response} from "express";
import { getUsers,createUser } from "../controllers/userController";

const router=Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtiene todas los usuarios
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: "María"
 *                   mail:
 *                     type: string
 *                     example: "maria@gmail.com"
 *                   password:
 *                     type: string
 *                     example: "1a58"
 */
router.get('/', getUsers);

/**
 * @swagger
 * /api/newUser:
 *   post:
 *     summary: Crea un nuevo usuario
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "María"
 *               email:
 *                 type: string
 *                 example: "maria@gmail.com"
 *               password:
 *                 type: string
 *                 example: "1a58"
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       500:
 *         description: Error en el servidor al crear el usuario
 */
router.post('/', createUser);


export default router;