import express from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())


const PORT = 5000

let localUser;
let lastTweets;

const users = []


const tweets  = []



app.get("/sign-up",(req,res)=>{
    res.send(users)
})


app.post("/sign-up",(req,res)=>{
    
    localUser = req.body

    users.push(localUser)
    res.send(users)
})


app.post("/tweets",(req,res)=>{

    if(!users.includes(localUser)){return res.status(401).send("UNAUTHORIZED")}

    
   const newTweet = {... req.body, avatar: localUser.avatar}
   tweets.push(newTweet)
   res.send("ok")
})


app.get("/tweets",(req,res)=>{

    lastTweets = [... tweets]
    lastTweets.reverse()

    res.send(lastTweets.slice(0,[10]))
    
})




app.listen(PORT, ()=>{
    console.log(`Rodando na porta ${PORT}`)
})