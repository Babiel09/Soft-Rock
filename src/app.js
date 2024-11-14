import express from 'express'


const app = express();
app.use(express.json());

const icons = [
    {
        "id": 1,
        "nome": "Chico Buarque"
    },
    {
        "id": 2,
        "nome": "Freddy Mercury"
    },
]


function getIconPerId(id) {
    return icons.findIndex(icon => {
        return icon.id === Number(id)
    })
}

app.get("/icons", (req, res)=> {
    res.status(200).json(icons)
})
app.get("/icons/:id", (req, res) => {
    const index = getIconPerId(req.params.id)
    res.status(200).json(icons[index])
})
app.post("/icons", (req, res)=>{
    icons.push(req.body)
    res.status(201).json(icons)
})
app.put("/icons/:id", (req, res)=> {
    const index = getIconPerId(req.params.id)
    icons[index].nome = req.body.nome
    res.status(202).json(icons[index])
})
app.delete("/icons/:id", (req, res)=>{
    const index = getIconPerId(req.params.id)
    icons.splice(index, 1)
    res.status(204).send("The Icon is now deleted")
})


export default app