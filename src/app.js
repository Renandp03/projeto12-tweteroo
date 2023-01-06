import express from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())


const PORT = 5000

const users = [
    {username:"fulano",
    avatar:"https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"}
]


const tweets  = [
    {
        username: "bobesponja",
        tweet: "eu amo o hub"
    }
]



app.get("/sing-up",(req,res)=>{
    res.send(users)
})




app.post("/sing-up",(req,res)=>{
    const user = req.body
    users.push(user)
    res.send("ok")
})


app.post("/tweets",(req,res)=>{
   const newTweet = req.body
   tweets.push(newTweet)
   res.send(newTweet)
})


app.get("/tweets",(req,res)=>{

    if(tweets.length <= 10){
        res.send(tweets)
    }

    let lastTweets = []
    
    for(i = tweets.length - 1; i > tweets.length - 11; i--){
        lastTweets.push(tweets[i])
    }
    res.send(lastTweets)
})




app.listen(PORT, ()=>{
    console.log(`Rodando na porta ${PORT}`)
})