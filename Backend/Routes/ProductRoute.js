const express = require('express');
const productmodel = require("../Models/Productmodel.js");
const categorymodel = require("../Models/Categorymodel.js");
const router = express.Router();

//add category
router.post("/add_category",async(req,res)=>{
    const{name,description,Image} =req.body;
    try{
        const category = await new categorymodel({ name,description,Image });
        await category.save();
        return res.status(201).json({ category });
    }catch(e){
        res.status(400).json({error:e.message});
    }
  })
//add product 
router.post("/add_product",async(req,res)=>{
    const{name,price,countInstock,description,category,images} =req.body;
    try{
        const product = await new productmodel({ name,price,countInstock,description,category,images });
        await product.save();
        return res.status(201).json({ product });
    }catch(e){
        res.status(400).json({error:e.message});
    }
})
module.exports = router;