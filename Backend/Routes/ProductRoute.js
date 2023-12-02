const express = require('express');
const productmodel = require("../Models/Productmodel.js");
const categorymodel = require("../Models/Categorymodel.js");
const router = express.Router();

//add category
router.post("/add_category",async(req,res)=>{
    const{name,description,Image} =req.body;
    try{
      console.log("pppppppppppppp",name)
        const existingcategory = await categorymodel.findOne({name:name});
        console.log(existingcategory);
        if(existingcategory?.name){
          return  res.status(400).send("Category already exists");
        }else{
        const category = await new categorymodel({name,description,Image});
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

// GET ONE CATEGORY
router.get("/category/:id",async(req,res)=>{
  try{
    const particularcategory = await categorymodel.find({_id:req.params.id});
    return res.status(200).json({particularcategory})

  }catch(error){
    return res.status(400).json({error})
  }
})

// UPDATE CATEGORY
router.patch('/update_category/:id', async (req, res) => {
  try {
    const updatedcategory = await categorymodel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true } 
    );
   return res.status(200).json(updatedcategory);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

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

//GET PARTICULAR PRODUCT
router.get('/product/:id', async (req, res) => {
try {
    const particularproduct = await productmodel.findById({_id:req.params.id})
   return res.status(200).json(particularproduct);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});
module.exports = router;