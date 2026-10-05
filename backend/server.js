const express=require("express")
const app=express()
const port=4000
const cors=require("cors")
require("dotenv").config()
app.use(express.json())
app.use(cors())
app.use("/fruits",require("./router/router"))

app.use("/",(req,res)=>
{
    res.send("server is running")
})

app.listen(port,()=>
{
    console.log("server is running on the port")
})