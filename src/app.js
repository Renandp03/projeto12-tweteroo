import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 5000

const users = [
    {username:"fulano",
    avatar:"https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"}
]


app.get("/",(req,res)=>{
    res.send(users)
})


app.listen(PORT, ()=>{
    console.log(`Rodando na porta ${PORT}`)
})