import express from 'express'
import dbConnection from './configs/databse.js';
import { icons } from './models/model.js';
import { routes } from './routes/route.js';

const connection = await dbConnection();

connection.on("error", (err)=>{
    console.error(err);
});

connection.once("open", ()=>{
    console.log("Conexão com o banco de dados estabelecida");
});


const app = express();
routes(app);



export default app