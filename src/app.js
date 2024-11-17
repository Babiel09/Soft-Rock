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


app.get("/icons", async (req, res)=> {
    const iconsGet = await icons.find({});
    res.status(200).json(iconsGet)
})

app.get("/icons/:id", (req, res)=> {
    const index = getIconPerId(req.params.id)
    res.status(200).json(icons[index])
})

app.post("/icons", (req, res)=> {
    icons.push(req.body)
    res.status(200).json(icons)
})

app.put("/icons/:id", (req, res)=>{
    const index = getIconPerId(req.params.id)       
    icons[index].nome = req.body.nome
    res.status(202).json(icons[index])
})

app.delete("/icons/:id", (req, res)=> {
    const index = getIconPerId(req.params.id)
    icons.splice(index, 1)
    res.status(204).send("Icon suceffult deleted")
})

export default app