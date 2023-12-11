const express = require('express');
const cors = require('cors');
const  route  = require('./Router/RouteCompo3');

const app = express();
// const bodyparser=require(bodyParser)
// app.use(bodyparser) ///deprecreted


//Bodyparser to handle with the undefind/null  error 
app.use(express.json())
// Enable CORS for all routes
app.use(cors({
    origin:"*"
}));
app.use('/api',route)


app.listen(5000, () => {
  console.log('Server is running on port 5000');

});
