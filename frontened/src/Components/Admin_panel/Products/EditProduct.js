import React,{useEffect, useState} from 'react';
import "./CreateNewproduct.css";
import { useSelector,useDispatch } from 'react-redux';
import {categoriesActions} from '../../../Redux/MiddlewareActions.js'
import { imagessubmit,files } from '../../Cloudinary/Cloudinary';
import axios from 'axios';
import { API } from '../../../API/API.js';
import {  toast } from 'react-toastify';

function EditProduct() {
  const [producttile,setProducttitle] = useState('');
  const [productprice,setProductprice] = useState(0);
  const [productdescription,setProductdescription] = useState('');
  const [productscount,setProductscount] = useState(0);
  const [productcategory,setProductcategory] = useState(null);
  const [productimage,setProductimage] = useState(null);
  const categoriesdata = useSelector((state)=>state.CategoriesReducer.categories.category);
  const dispatch = useDispatch();
  useEffect( ()=>{
    const responsedata = async () =>{
await dispatch(categoriesActions())
    }
    responsedata();
   },[])
   const handleCategoryChange = (event) => {
    setProductcategory(event.target.value);
  };
  const handleFileChange = (e) => {
    const file = e.target.files;
    setProductimage(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await imagessubmit(event,productimage);
  await  axios.post(API+"add_product",{name:producttile,
      price:productprice,
      countInstock:productscount,
      description:productdescription,
      category:productcategory,
      images:files}).then((res)=>{
        console.log(res.data);
        toast.success(`product successfully added`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })
        setProductcategory('')
        setProductdescription('')
        setProductimage(null)
        setProductprice(0)
        setProductscount(0)
        setProducttitle('')
        }).
      catch((error)=>{
        console.log(error.message);
        toast.error(`${error.response.data} `, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })
       })
};




  return (
    <div>
       <div style={{display:"flex",justifyContent:"space-between"}}>
       <button style={{border:"none",backgroundColor:"red",color:"white",fontWeight:"bolder",
       padding:"0px 5px 0px 5px",borderRadius:"10px",marginRight:"50px"}}>Go to products</button>
       <h4 style={{fontWeight:"bold"}}>Edit Products</h4>
       <button style={{border:"none",backgroundColor:"green",color:"white",fontWeight:"bolder",
       padding:"0px 5px 0px 5px",borderRadius:"10px",marginRight:"50px"}} onClick={handleSubmit}>Update Now</button>
       </div>
       <div className='create_product_form'>
       <form >
        <div>
        <label className='product_label'>Product title</label><br />
        <input type='text' placeholder='Product Name...' className='input_field' 
        value={producttile} onChange={(e)=>setProducttitle(e.target.value)}/>
        </div>
        <div>
        <label className='product_label'>Price</label><br />
        <input type='number' placeholder='Product Price...' className='input_field' 
        value={productprice} onChange={(e)=>setProductprice(e.target.value)}/>
        </div>
        <div>
        <label className='product_label'>Count In Stock</label><br />
        <input type='number' placeholder='Product Stock...' className='input_field' 
        value={productscount} onChange={(e)=>setProductscount(e.target.value)}/>
        </div>
        <div>
        <label className='product_label'>Description</label><br />
        <textarea  placeholder='Product Description...' className='input_field' rows={5} cols={100} 
        value={productdescription} onChange={(e)=>setProductdescription(e.target.value)}/>
        </div>
        <div>
        <label className='product_label' for='categories-names'>category</label><br />
        <select name="categories-names" id="categories-names" className='input_field'  value={productcategory}
        onChange={handleCategoryChange}>
             <option value="" disabled>Select a category</option>
      {categoriesdata && categoriesdata.map((data)=>{
return ( 

<option value={data._id} >{data.name}</option>
)
      })}
      </select>
        </div>
        <div >
        <label className='product_label'>Images</label><br />
        <input type='file' style={{marginBottom:"20px",width:"100%"}} multiple onChange={handleFileChange} />
        </div>
       </form>
       </div>
    </div>
  )
}

export default EditProduct;
