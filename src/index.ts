import express, { Request, Response } from "express";
import activitiesRoutes from './routes/activities';
import dotenv from "dotenv";
import conectarDB from "./config/db";

//Configuración variables de entorno desde el archivo .env
dotenv.config();
conectarDB();

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());


//Rutas de actividades
app.use('/api/activities', activitiesRoutes);

//Ruta de bienvenida
app.get("/ping", (req: Request, res: Response) => {
  res.send("Welcome to the Node.js + TypeScript API!");
});

//Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
