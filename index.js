const express = require("express")
const app = express();
const path = require("path")

let port = 8081
console.log("result", 2+2)

app.get('/', (req, res,next)=>{
    res.json({msg: `hello world`, project: "express"})
})
// app.get('/', (req, res,next)=>{
//     res.sendFile(path.join(__dirname,"index.html"))
// })

app.listen(port, ()=>{
    console.log(`server is listneing on port ${port}`)     
})
