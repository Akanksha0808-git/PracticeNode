const express = require('express');
const cors = require('cors');
const  route  = require('./Router/RouteCompo3');
const app = express();
app.use(express.json())
// Enable CORS for all routes
app.use(cors({
    origin:"*"
}));
app.use(route)

//http methods
app.get('/home',(req,res)=>{
    res.send('this is our home page')
})
app.post('/login',(req,res)=>{
    const data=req.body
    console.log(data)
    res.send('this is our login page')
})
app.put('/update',(req,res)=>{
    const data=req.body
    console.log(data)
    res.send('this is our update page')
})
app.get('/delete',(req,res)=>{
    
    res.send('this is our home page')
})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
