import React,{useEffect, useState} from 'react';
import "./Categories.css";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios"
import { categoriesActions } from '../../../Redux/MiddlewareActions.js'; 
import {imagessubmit,files} from "../../Cloudinary/Cloudinary.js"
import { API } from '../../../API/API.js';
import { useSelector,useDispatch } from 'react-redux';
function Categories() {
  const [categoryname,setCategoryname] = useState(""); 
  const [description,setDescription] = useState("");
  const [image,setImage] = useState(null);
  const [imagetoggle,setImagetoggle] = useState(false)
  const categoriesdata = useSelector((state)=>state.CategoriesReducer.categories.category);
  const dispatch = useDispatch();
  useEffect( ()=>{
    const responsedata = async () =>{
await dispatch(categoriesActions())
    }
    responsedata();
   },[])


  const handleFileChange = (e) => {
    setImagetoggle(false)
    const file = e.target.files[0];
    setImage(file);
  };
  const categorysubmit=async (e)=>{
  e.preventDefault();
  await imagessubmit(e,image)
 console.log("pavan kumar",files)
  setTimeout(async ()=>{
await axios.post(API+"add_category",{
  name:categoryname,
  description,
  Image:files[0]
}).then((res)=>{
  console.log(res)
}).catch((error)=>console.log(error.message))
},2000)
  }

const Editcategory=async (e,id)=>{
e.preventDefault();

setImagetoggle(true)
await axios.get(API+`category/${id}`).
then((res)=>{
  console.log("response",res.data.particularcategory)
   setCategoryname(res.data.particularcategory[0]?.name );
  setDescription(res.data.particularcategory[0]?.description)
  setImage(res.data.particularcategory[0]?.Image)
})
}
console.log("categoriesdata",image)
console.log("categoriesdata",categoriesdata)
  return (
    <div>
<h4 style={{fontWeight:"bold"}}>Categories</h4>
<div className='categories_form'>

  <form  style={{display:"flex",flexDirection:"column"}}>
<div>
        <label className='product_label'>Category Title</label><br />
        <input type='text' placeholder='type here' className='categories_input' value={categoryname} 
        onChange={(e)=>{console.log(e.target.value);setCategoryname(e.target.value)}}/>
        </div>

        <div>
        <label className='product_label'>Description</label><br />
        <textarea  placeholder='Product Description...' className='categories_input' rows={5} cols={40} value={description} 
        onChange={(e)=>setDescription(e.target.value)}/>
        </div>
       
        <div >
        <label className='product_label' >Images</label><br />
        <input type='file' style={{marginBottom:"20px",width:"100%"}}  onChange={handleFileChange} />
        </div>
    {(imagetoggle && image &&image?.length >0) && <img src={image} alt="image" style={{width:"100px",height:"100px"}}/>}
        {/* <input type='submit' value={!imagetoggle ? 'submit':"update"}  style={{marginBottom:"20px",width:"100%"}}/> */}
       {!imagetoggle ? <button style={{marginBottom:"20px",width:"100%"}} onClick={categorysubmit}>Submit</button>:
       <button style={{marginBottom:"20px",width:"100%"}} onClick={(e)=>categorysubmit(e,data._id)}>Update</button>} 
        </form>


<div>
        <table id="customers">
  <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>IMAGE</th>
    <th>ACTIONS</th>
  </tr>

    {categoriesdata ? categoriesdata?.map((data,index)=>{
      return(
        <tr key={data._id}>
 <td>{index}</td>
    <td>{data?.name}</td>
    <td><img src={data?.Image} alt="image" style={{width:"50px",height:"50px"}}/></td>
    <td >
      <div style={{display:"flex",justifyContent:"space-around",fontSize:"20px"}}>
      <FaEdit onClick={(e)=>Editcategory(e,data._id)}/><RiDeleteBin6Line />
      </div>
      </td>
</tr>
)}):""}
   
 
</table>
        </div>
</div>
   </div>
  )
}

export default Categories
