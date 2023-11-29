const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();
const usermodel = require("../Models/Usermodel.js");
const Middleware = require("../MiddleWare/MiddleWare.js");



//-----------------SIGN UP ROUTE------------
router.post("/signup", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    const existingUser = await usermodel.findOne({ email });

    if (existingUser) {
      return res.status(500).send("Email Already Exists");
    }

    if (!firstname || !lastname || !email || !password) {
      return res.status(401).send("Please fill all fields");
    }

    const user = await new usermodel({ firstname, lastname, email, password });
    await user.save();
    return res.status(201).json({ user });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
});


//------------------LOGIN ROUTE----------------------
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await usermodel.findOne({ email });
    if (existingUser) {
      if (existingUser.password == password) {
        let payload = {
          user: {
            id: existingUser.id,
          },
        };

        jwt.sign(payload, "jwtpassword", (error, token) => {
          if (error) throw error;
          const userWithoutPassword = { ...existingUser._doc }; // mongodb data to plain javascript object can be converted 
          delete userWithoutPassword.password;

          return res.json({ token, user: userWithoutPassword });
         
         
        });
      } else {
        return res.status(400).send("password wrong");
      }
    } else {
      return res.status(400).send("email wrong");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

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