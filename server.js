import http from "http"


const PORT = 8000


const rota = {
    "/teste" : "Funcionou",
    "/estou" : "Estou a 5 universos Paralelos a usa frente"
}

const server = http.createServer((req,res)=>{
    res.writeHead(200, {"Context-Type" : "application/json"})
    res.end(rota[req.url])
})

server.listen(PORT,()=>{
    console.log(`Listend and serving the port: http://localhost:${PORT}`)
})