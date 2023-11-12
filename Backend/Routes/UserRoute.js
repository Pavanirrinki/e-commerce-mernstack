const user = require("../Models/Usermodel.js");
const express = require('express');
const router = express.Router();


router.post("/signup",async(req,res)=>{
    try{
res.send("successfully signup")
    }catch(e){
        res.status(400).json({error:e.message})
    }
})

module.exports = router;