// server using express .....it is less complex as we do not need to make whole complex handler in this while in node we have to make this kind of thing
const express = require('express');
const app = express()
app.get('/' , (req,res) => {
return res.send("homepage")
})
app.get('/about',(req,res)=>{
return res.send("about")
})

PORT = 3000
app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)})


// server using node

const http = require('http')
const myserver = http.createServer((req,res)=>{
    console.log(req.url)


    // ...handler{}
console.log("new server created")
res.end("Hello")
})