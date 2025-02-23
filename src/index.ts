import express, { Request, Response } from "express";
import activitiesRoutes from './routes/activitiesRoutes';
import dotenv from "dotenv";
import conectarDB from "./config/db";
import setupSwagger from "./config/swaggerConfig";
import userRoutes from "./routes/userRoutes";
import cors from 'cors';
import corsOptions from "./config/corsConfig";

//Configuración variables de entorno desde el archivo .env
dotenv.config();

//Conexión a MongoDB
conectarDB();

const app = express();
const PORT = process.env.PORT || 3000;

//Habilitar CORS
app.use(cors(corsOptions));

//Middleware
app.use(express.json());

setupSwagger(app); //Configura swagger

//Rutas de actividades
app.use('/api/activities', activitiesRoutes);
app.use('/api/newActivity',activitiesRoutes);
app.use('/api/users', userRoutes);
app.use('/api/newUser',userRoutes);

//Ruta de bienvenida
app.get("/ping", (req: Request, res: Response) => {
  res.send("Welcome to the Node.js + TypeScript API!");
});

//Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
