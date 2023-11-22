const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
 description:{
  type:String,
  required:true
 },
Image:{
  type:String,
  required:true
}
});
const category = mongoose.model('Product',categorySchema);
module.exports = category;
