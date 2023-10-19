let arr = []// database
const saltround = 10
const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken")
const secretkey="@#$%^"
const fetchData = (req, res) => {
    // return res.send('fetching all the details of the user')
    return res.send(arr)
}

const Register = async (req, res) => {
    const details = req.body;
    console.log(details)
    // const {email ,password,phone,batch}=req.body;
    const user= arr.find((item) => {
        if (details.email === item.email) {
            return item
        }
    })
    if(user){
        return res.send("user already exist")
    }
    //when we use hash we use async await bcz it like promise 
    //otherwise to 
    const hashpassword = await bcrypt.hash(details.password, saltround)
    //for hash the user's password we are making temp object 

    let temp = {
        email: details.email,
        password: hashpassword,
        batchID: details.batchId
    }
    arr.push(temp)
    const token = jwt.sign({ email: details.email },secretkey, {
        expiresIn: "2d",
      });
      res.status(200).send({
        msg: "User is registered successfully",
        result: arr,
        token: token,
      });
  
    // return res.send('user registered successfully')

}
const login = (req, res) => {
    return res.send('login success')
}
module.exports = { fetchData, Register, login }