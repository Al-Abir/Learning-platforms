require("dotenv").config();

const express = require("express");
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();
const PORT = process.env.PORT||5000;
const MONGO_URL = process.env.MONGODB_URL;

cors({
    origin:process.env.CLIENT_URL,
    methods:["GET","POST","DELETE","PUT"],
    allowedHeaders:["Content-Type","Authorization"]
})


app.use(express.json())

//Database connection
mongoose.connect(MONGO_URL)
.then(()=>console.log("mongoDb is connected"))
.catch((e)=>console.log(e))





app.listen(PORT, ()=>{
     console.log(`Server is now runnig on port ${PORT}`)
})