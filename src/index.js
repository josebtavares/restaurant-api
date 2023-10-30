const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const UserRoutes = require('./routes/user.routes.js')
const RestauRoutes = require('./routes/restaurant.routes.js')
const dotenv = require('dotenv')
const port = 5000

     App = express()
     dotenv.config()
     App.use(express.json())
     App.use((_,res,next)=>{
          res.header("Access-Control-Allow-Origin" , "*");
          res.header("Access-Control-Allow-Method" , "POST, GET,DELETE,PUT");
          res.header("Access-Control-Allow-Headers" , "X-PINGOTHER, Content-Type, Authorization ");
          App.use(cors());
          next();
     });
   


    App.use('/api',UserRoutes)
    App.use('/api',RestauRoutes) 



App.listen(port, ()=> {

   mongoose.connect(process.env.DB_CONECTION)   
   .then(()=>{
        console.log(" Sucessful connection :) ");
   }) 
   .catch(err =>{
        console.log("Connection failled :( --"+err.message);
   })
    console.log(`Listennig on port ${port} ... > ${process.env.VARI} < ...`) 

})



