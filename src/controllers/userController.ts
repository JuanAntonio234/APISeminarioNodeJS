import {Request,Response} from 'express';
import { IUser } from "../models/user";
import { obtenerEntradas } from '../services/userService';


export const getUsers = async (req: Request, res: Response) => {
        try {
            const users = await obtenerEntradas.getAllUsers();
            console.log("Usuarios obtenidos:", users);

            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: "Error al obtener los usuarios", error });
        }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        // Verificar si el email ya está en la BD
        const existingUser = await obtenerEntradas.getAllUsers();
        if (existingUser.some(user => user.email === email)) {
             res.status(400).json({ message: "El correo electrónico ya está registrado" });
        }

        const newUser: IUser = {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        };

        await obtenerEntradas.createUser(newUser);
        res.status(201).json({ message: "Creado con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error al crear al usuario", error });
    }
};  
