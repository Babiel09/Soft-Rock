import express from 'express'
import dbConnection from './configs/databse.js';
import { routes } from './routes/route.js';
import cors from 'cors';


const connection = await dbConnection();

connection.on("error", (err)=>{
    console.error(err);
});

connection.once("open", ()=>{
    console.log("Conexão com o banco de dados estabelecida");
});

    const corsOption =  {
        origin: process.env.FRONT_PORT,
        methods: ["GET, POST, PUT, PATCH, DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"]
    } 

const app = express();
app.use(cors(corsOption))
routes(app);



export default app