const express = require('express');
const productmodel = require("../Models/Productmodel.js");
const categorymodel = require("../Models/Categorymodel.js");
const router = express.Router();

//add category
router.post("/add_category",async(req,res)=>{
    const{name,description,Image} =req.body;
    try{
        const existingcategory = await categorymodel.findOne({name});
        console.log(existingcategory);
        if(existingcategory.name){
          return  res.status(400).send("Category already exists");
        }else{
        const category = await new categorymodel({ name,description,Image});
        await category.save();
        return res.status(201).json({ category });
        }
    }catch(e){
        res.status(400).json({error:e.message});
    }
  })

  //GET ALL CATEGORIES
  router.get("/all_catgories",async(req,res)=>{
    try{
        const category = await categorymodel.find();
        res.status(200).json({category});
      
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

//ALL PRODUCTS
router.get("/get_all_product",async(req,res)=>{
try{
        const product = await productmodel.find();
        return res.status(201).json({ product});
    }catch(e){
        res.status(400).json({error:e.message});
    }
})
// UPDATE PRODUCT
router.patch('/update_product/:id', async (req, res) => {
    try {
      const updatedData = await productmodel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true } 
      );
     return res.status(200).json(updatedData);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });
module.exports = router;