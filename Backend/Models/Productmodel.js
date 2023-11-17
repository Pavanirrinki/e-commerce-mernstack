const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
 description:{
    type:String,
    required:true
 },
 category:{
    type: mongoose.Schema.Types.ObjectId, ref: 'category' 
 },
 images:[{
    type:String,
    required:true
 }]
});
const Product = mongoose.model('Product',productSchema);
module.exports = Product;
