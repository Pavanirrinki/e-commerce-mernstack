const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();
const usermodel = require("../Models/Usermodel.js");
const Middleware = require("../MiddleWare/MiddleWare.js");



//-----------------SIGN UP ROUTE------------
router.post("/signup",async(req,res)=>{
    const {  firstname,lastname,email,password} = req.body;
    try{
const existingUser = await usermodel.findOne({email})
if(existingUser){
    res.status(400).send("Email Already Exists")
}
if(!firstname|| !lastname || !email || !password){
    res.status(401).send("please fill all fields")
}else{
    const user =await new usermodel({ firstname,lastname, email, password });
    await user.save();
    res.status(201).json({ user });
}
    }catch(e){
        res.status(400).json({error:e.message})
    }
})

//------------------LOGIN ROUTE----------------------
router.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    try{
      const existingUser = await usermodel.findOne({ email });
      if(existingUser){
        if(existingUser.password == password){
          let payload={ 
            user:{
                id:existingUser.id
            }
           
        }
        
        jwt.sign(payload,"jwtpassword",(error,token)=>{
         if(error) throw error
       return res.json({token,existingUser})
        
        })
        }else{
          return res.status(400).send("password wrong")
        }
      }else{
        return  res.status(400).send("email wrong")
      }
    }catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  })

//-----------PROFILE PIC ROUTE------------------ 
router.post("/profile_pic",async(req,res)=>{
    const {email,profilepic} = req.body;
    try{
const user = await usermodel.findOneAndUpdate({ email },
    { $set: { profilepic } },
    { new: true })
    res.status(200).send("profilepic updated successfully")
    }catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
})
  
module.exports = router;