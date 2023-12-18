const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
product:[{
type: mongoose.Schema.Types.ObjectId, ref: 'category' 
 }],
});
const category = mongoose.model('category',categorySchema);
module.exports = category;
