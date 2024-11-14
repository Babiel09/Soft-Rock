import app from './src/app.js'

const PORT = 8000

app.listen(PORT, ()=> {
    console.log(`API rodando na porta: http://localhost:${PORT}`)
})