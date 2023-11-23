import React,{useState} from 'react';
import "./Categories.css";
import { PiDotsThreeOutlineBold } from "react-icons/pi";
import axios from "axios"
import {imagessubmit,files} from "../../Cloudinary/Cloudinary.js"
function Categories() {
  const [categoryname,setCategoryname] = useState(""); 
  const [description,setDescription] = useState("");
  const [image,setImage] = useState(null);


  const handleFileChange = (e) => {
    const file = e.target.files;
    setImage(file);
  };
  const categorysubmit=(e)=>{
  imagessubmit(e,image)
console.log(image,"image")
console.log("files12333",files)
  }
 

  return (
    <div>
<h4 style={{fontWeight:"bold"}}>Categories</h4>
<div className='categories_form'>
  <form onSubmit={categorysubmit} style={{display:"flex",flexDirection:"column"}}>
<div>
        <label className='product_label'>Category Title</label><br />
        <input type='text' placeholder='type here' className='categories_input'/>
        </div>

        <div>
        <label className='product_label'>Description</label><br />
        <textarea  placeholder='Product Description...' className='categories_input' rows={5} cols={40}/>
        </div>
       
        <div >
        <label className='product_label' >Images</label><br />
        <input type='file' style={{marginBottom:"20px",width:"100%"}}  onChange={handleFileChange} multiple/>
        </div>
        <input type='submit' value='submit'  style={{marginBottom:"20px",width:"100%"}}/>
        </form>


<div>
        <table id="customers">
  <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>DESCRIPTION</th>
    <th>ACTION</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td><PiDotsThreeOutlineBold /></td>
  </tr>
  <tr>
    <td>2</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td><PiDotsThreeOutlineBold /></td>
  </tr>
  <tr>
    <td>3</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td><PiDotsThreeOutlineBold /></td>
  </tr>
  <tr>
    <td>4</td>
    <td>Mens Clothing</td>
    <td>Germany</td>
    <td><PiDotsThreeOutlineBold /></td>
  </tr> 
</table>
        </div>
</div>
   </div>
  )
}

export default Categories
