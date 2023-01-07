import express from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())


const PORT = 5000

let localUser;
let lastTweets;

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
    },
     {
        username: "bobesponja",
        avatar:"https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar:"https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar:"https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar:"https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar:"https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "bobesponja",
        avatar:"https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    },
    {
        username: "Superman",
        avatar:"https://uploads.jovemnerd.com.br/wp-content/uploads/2022/12/superman_reboot_superman_adeus_henry_cavill__295h2w243-1210x544.jpg",
        tweet: "To voando alto"
    },
    {
        username: "Mulher-Maravilha",
        avatar:"https://upload.wikimedia.org/wikipedia/pt/thumb/9/9f/Mulher_Maravilha_2009.jpg/250px-Mulher_Maravilha_2009.jpg",
        tweet: "Sextoooou"
    },
    {
        username: "Flash",
        avatar:"https://tangerina.uol.com.br/_next/image?url=https%3A%2F%2Ffeira.tangerina.news%2Fwp-content%2Fuploads%2F2022%2F06%2Fezra-miller-liga-da-justica-foto-divulgacao-warner.jpg&w=680&q=75",
        tweet: "Atrasado para o trabalho de novo..."
    },
    
    
    
]



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
    lastTweets.reverse().slice(0,[9])

    res.send(lastTweets)
    
})




app.listen(PORT, ()=>{
    console.log(`Rodando na porta ${PORT}`)
})