require("dotenv").config();

const express = require("express");
const cors = require('cors')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth-routes/index')
const app = express();
const PORT = process.env.PORT||5000;
const MONGO_URL = process.env.MONGODB_URL;

app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"] // এখানেও ঠিক, কিন্তু মূল issue না এখানে
}));

app.use(express.json())

//Database connection
mongoose.connect(MONGO_URL)
.then(()=>console.log("mongoDb is connected"))
.catch((e)=>console.log(e))

app.use("/auth",authRoutes);



app.listen(PORT, ()=>{
     console.log(`Server is now runnig on port ${PORT}`)
})