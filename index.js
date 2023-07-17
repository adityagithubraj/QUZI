//.............require all modul..................

const express =require("express");
const connection = require("./config/db")
const {userRouter}=require("./routes/user.routes")
const cors=require("cors")
const {quzRouter}=require("./routes/quz.route")
const app = express();

require("dotenv").config()
//...................use module..................
app.use(express.json());
app.use(cors())
const port=process.env.PORT|| 5050



//...............................$


app.get("/",(req,res)=>{
    res.send("<h1>welcome to Quiz Builder API </h1>")
})

app.use("/user",userRouter)
app.use("/Dashboard",quzRouter)



//........... server is listen her ..............
app.listen(port,()=>{
    try {
        connection
        console.log('conected to DB')
    } catch (error) {
        console.log(error.message)
    }
    console.log(`port is runig ${port}`)
})