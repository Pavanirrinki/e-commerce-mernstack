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
       <form>
        <div>
        <label className='product_label'>Product title</label><br />
        <input type='text' placeholder='Product Name...' className='input_field'/>
        </div>
        <div>
        <label className='product_label'>Product title</label><br />
        <input type='text' placeholder='Product Name...' className='input_field'/>
        </div>
        <div>
        <label className='product_label'>Product title</label><br />
        <input type='text' placeholder='Product Name...' className='input_field'/>
        </div>
        <div>
        <label className='product_label'>Product title</label><br />
        <input type='text' placeholder='Product Name...' className='input_field'/>
        </div>
        <div>
        <label className='product_label'>Product title</label><br />
        <input type='text' placeholder='Product Name...' className='input_field'/>
        </div>
       </form>
       </div>
    </div>
  )
}

export default CreateNewproduct
