const express = require("express")
const app = express();

let port = 5001
console.log("result", 2+2)

// app.get('/', (req, res,next)=>{
//     res.json({msg: `hello world`, project: "express"})
// })
app.get('/', (req, res,next)=>{
    res.sendFile("./index.html")
})

app.listen(port, ()=>{
    console.log(`server is listneing on port ${port}`)     
})
