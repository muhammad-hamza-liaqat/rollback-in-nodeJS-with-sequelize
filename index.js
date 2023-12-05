const express = require("express");
const app = express();
require("dotenv").config()
const PORT = process.env.PORT || 3000;



// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// server
app.listen(process.env.PORT, ()=>{
    console.log(`server running at localhost:/${PORT}`)
})
