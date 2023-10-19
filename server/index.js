const express = require('express');
const routes=require("./Router/RouteCompo")
const app = express();

// app.use("/api/main",route)
app.get("/",(req,res)=>{
  res.send("API is running fine")
})
app.use("/api",routes)
//inshort without controller
// const Home=require('./Router/RoutesCompo2')
// app.get("/",Home) 

const port = 4000; 
app.listen(port, () => {
  try{console.log(`Server is running fine on http://localhost:${port}`);}
  catch(err){
    console.log("error during starinf server:${}")
  }
});
