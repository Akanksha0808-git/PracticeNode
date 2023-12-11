const express = require('express');
const routes=require("./Router/RouteCompo")
const app = express();

// app.use("/api/main",route)
app.get("/",(req,res)=>{
  res.send("API is running fine")
})

app.use("/main",routes)

//inshort without controller
// const Home=require('./Router/RoutesCompo2')
// app.get("/",Home) 
//http methods
// app.get('/home',(req,res)=>{
//     res.send('this is our home page')
// })
// app.post('/login',(req,res)=>{
//     const data=req.body
//     console.log(data)
//     res.send('this is our login page')
// })
// app.put('/update',(req,res)=>{
//     const data=req.body
//     console.log(data)
//     res.send('this is our update page')
// })
// app.get('/delete',(req,res)=>{
    
//     res.send('this is our home page')
// })

const port = 4000; 
app.listen(port, () => {
  try{console.log(`Server is running fine on http://localhost:${port}`);}
  catch(err){
    console.log("error during starinf server:${}")
  }
});
