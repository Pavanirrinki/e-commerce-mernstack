import React from 'react'
import "./ManageAddress.css"
import { FaPlus } from "react-icons/fa";
function ManageAddress() {
  return (
    <div>
      <h4 style={{fontWeight:"900"}}>Manage Address</h4>
     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto",
     color:"blue",border:"1px solid black",marginBottom:"20px",width:"90%"}}>
  <FaPlus />
  <p style={{ fontSize: "20px", marginLeft: "8px", marginBottom: "0" }}>Add Address</p>
</div>

<form style={{flexWrap:"wrap",justifyContent:"center",paddingTop:"40px",width:"80%",margin:"0 auto",marginBottom:"20px"}} 
className='d-md-flex d-block box_address'>
  <input type="name" placeholder='Enter your name...' className='input_field'/><br />
 <input type="tel" placeholder="Enter your mobile number..." className='input_field'/><br />
 
<input type="number" placeholder='Enter your zipcode...'  className='input_field'/><br />
<input type="text" placeholder='Enter your zipcode...'  className='input_field'/><br />
<textarea placeholder='Address(Area and Street)' rows={7} cols={50} className='input_textarea_field'/><br />
<input type="text" placeholder='City/District/Town' className='input_field'/><br />
<input type="text" placeholder='Landmark' className='input_field'/><br />
<input type="tel" placeholder='AlternativePhoneNumber......' className='input_field'/><br />
<input type="tel" placeholder='AlternativePhoneNumber......' className='input_field'/><br />
<div style={{display:"flex",justifyContent:"center",width:"100%",marginBottom:"20px"}}>
  <label style={{fontSize:"20px",marginLeft:"20px"}}>Address_type :-</label>
<label style={{fontSize:"20px",margin:"auto"}}>

    <input type="radio" name="address_type" value="Home" />
    Home
  </label>
  <label style={{fontSize:"20px",margin:"auto"}}>
    <input type="radio" name="address_type" value="Work" />
    Work
  </label>
</div>
<div style={{display:"flex",justifyContent:"space-around",width:"90%",marginBottom:"30px"}}>
<button type='submit'style={{width:"40%",backgroundColor:"#3d76d1",border:"none",color:"white",padding:"10px"}} className='button_margin'>Submit</button>
<button type='submit'style={{width:"40%",color:"#3d76d1",border:"none",backgroundColor:"white"}} className='button_margin'>Cancel</button>
</div>
</form>
<div style={{border:"1px solid black",backgroundColor:"white",width:"80%",marginBottom:"20px",margin:"0 auto"}}>
  <p>HOME</p>
  <div style={{display:"flex"}}>
  <h5 style={{marginRight:"20px"}}>Pavan Kumar</h5>
  <h5>6302929228</h5>
  </div>
  <div className='d-md-flex d-block'>
  <h5>1-64,</h5>
  <h5>Veeravasaram,</h5>
 <h5> West Godavari District, </h5>
 <h5> Andhra Pradesh -</h5>
 <h5> 534247</h5>
  </div>
</div>
    </div>
  )
}

export default ManageAddress
