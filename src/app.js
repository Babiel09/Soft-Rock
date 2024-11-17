import express from 'express'
import dbConnection from './configs/databse.js';
import { icons } from './models/model.js';
const connection = await dbConnection();

connection.on("error", (err)=>{
    console.error(err);
});

connection.once("open", ()=>{
    console.log("Conexão com o banco de dados estabelecida");
});


const app = express();
app.use(express.json());



export default app