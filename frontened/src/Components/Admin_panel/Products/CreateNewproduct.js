import React from 'react';
import "./CreateNewproduct.css";
function CreateNewproduct() {
  return (
    <div>
       <div style={{display:"flex",justifyContent:"space-between"}}>
       <button style={{border:"none",backgroundColor:"red",color:"white",fontWeight:"bolder",
       padding:"0px 5px 0px 5px",borderRadius:"10px",marginRight:"50px"}}>Go to products</button>
       <h4 style={{fontWeight:"bold"}}>Add Products</h4>
       <button style={{border:"none",backgroundColor:"green",color:"white",fontWeight:"bolder",
       padding:"0px 5px 0px 5px",borderRadius:"10px",marginRight:"50px"}}>Publish Now</button>
       </div>
       <div className='create_product_form'>
       <form >
        <div>
        <label className='product_label'>Product title</label><br />
        <input type='text' placeholder='Product Name...' className='input_field'/>
        </div>
        <div>
        <label className='product_label'>Price</label><br />
        <input type='number' placeholder='Product Price...' className='input_field'/>
        </div>
        <div>
        <label className='product_label'>Count In Stock</label><br />
        <input type='text' placeholder='Product Stock...' className='input_field'/>
        </div>
        <div>
        <label className='product_label'>Description</label><br />
        <textarea  placeholder='Product Description...' className='input_field' rows={5} cols={100}/>
        </div>
       
        <div >
        <label className='product_label'>Images</label><br />
        <input type='file' style={{marginBottom:"20px",width:"100%"}}/>
        </div>
       </form>
       </div>
    </div>
  )
}

export default CreateNewproduct
