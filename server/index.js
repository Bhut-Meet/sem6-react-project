const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./models/user")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/rkuuser");

app.post('/',(req,res)=>{
    UserModel.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

// app.get('/users', async (req, res) => {
//     try {
//       const users = await rkuuser.find();
//       res.json(users);
//     } catch (error) {
//       console.error('Error retrieving users', error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   });

app.post('/Login',(req,res)=>{
    const{email,pass} =req.body;
    UserModel.findOne({email:email})
    .then(user=> {
        if(user) 
        {
            if(user.email === email && user.pass === pass)
                {
                    res.json("success")
                } 
            else 
            {
                res.json('the password is incorrect')
            }
        }
        else {
            res.json("no recod found")
        }
    })
    .catch(err=>res.json(err))
})

app.listen(3001, () => {
    console.log('Server is running on port 3001')
}) 