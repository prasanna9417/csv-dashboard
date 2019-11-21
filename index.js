const express = require('express')
const app = express()
const router = require('./config/routes')
const port = 3015
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.json({
        notice:"Welcome to csv parser application"
    })
})

app.use('/',router)

app.listen(port, ()=>{
    console.log("node js server is running on port", port)
})