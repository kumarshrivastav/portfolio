const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const path=require('path')
const router = require('./routes/portfolioRoute')
const app=express()
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,'./client/build')))
app.use("/api/v1/portfolio",router)
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})
const PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`Server Running or PORT ${PORT}`)
})