const express=require("express") //import express
const server=express()
let port=9090
server.listen(port,()=>{
    console.log("server pornit " + port)
})

//get / put / post / delete => http verbs

server.get("/ping", (req,res)=>{
    res.send("sunt peweb")
})