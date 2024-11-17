import "dotenv/config"
import app from './src/app.js'



app.listen(process.env.PORT,()=> {
    console.log(`API rodando na porta: http://localhost:${process.env.PORT || 8080}`)
})