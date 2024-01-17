const express = require("express")
const app = express();

let port = 5001
console.log("result", 2+2)

app.get('/', (req, res,next)=>{
    res.json({hi: `hello world`})
})

app.listen(port, ()=>{
    console.log(`server is listneing on port ${port}`)     
})
