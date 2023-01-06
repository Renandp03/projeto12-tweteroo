import express from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())


const PORT = 5000

let localUserAvatar;

const users = [
    {
        username:"fulano",
        avatar:"https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
    },
    {
        username:"Batman",
        avatar:"https://cdn.ome.lt/Tsf3AvI4rVMIJD-sIRIYanzRp44=/480x360/smart/extras/conteudos/batman-robert-pattinson_gydxtmv.jpg"
    },
    {
        username:"Flash",
        avatar:"https://uploads.jovemnerd.com.br/wp-content/uploads/2023/01/flash_warner_pode_manter_ezra_miller__3ba9c2sx-1210x544.jpg"
    }
]


const tweets  = [
    {
        username: "bobesponja",
        avatar:"https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    }
    
]



app.get("/sign-up",(req,res)=>{
    res.send(users)
})




app.post("/sign-up",(req,res)=>{
    const user = req.body

    localUserAvatar = user.avatar

    users.push(user)
    res.send(users)
})


app.post("/tweets",(req,res)=>{
   const newTweet = {... req.body, avatar: localUserAvatar}
   tweets.push(newTweet)
   res.send(newTweet)
})


app.get("/tweets",(req,res)=>{

    let lastTweets = []

    if(tweets.length <= 10){
        
        return res.send(tweets)
    }

    
    
    for(i = tweets.length - 1; i > tweets.length - 11; i--){
        lastTweets.push(tweets[i])
    }
    res.send(lastTweets)
})




app.listen(PORT, ()=>{
    console.log(`Rodando na porta ${PORT}`)
})