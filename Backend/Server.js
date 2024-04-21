// const express =require("express");
 const app=require("./App");
 const dotenv = require("dotenv")
 const connectDatabase=require("./Config/database")




 dotenv.config({path:"Backend/Config/config.env"});
 connectDatabase();


app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})
 