import React from 'react'
import Travel from "../../../Images/aeroplane.jpg"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function CreateProduct() {
  return (
    <div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
       <h4 style={{fontWeight:"bold"}}>Products</h4>
       <button style={{border:"none",backgroundColor:"green",color:"white",fontWeight:"bolder",
       padding:"0px 5px 0px 5px",borderRadius:"10px",marginRight:"50px"}}>Create New</button>
       </div>
       <div style={{border:"1px solid black",backgroundColor:"white",display:"flex",justifyContent:"center",flexWrap:"wrap",margin:"20px"}}>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"250px",border:"1px solid black",margin:"10px"}}>
        <img src={Travel} style={{height:"200px",width:"200px"}}/>
        <p>Aeroplane jet</p>
        <div style={{display:"flex",justifyContent:"center",marginBottom:"10px"}}>
<FaEdit style={{fontSize:"20px",border:"3px solid green",width:"60px",height:"30px"}}/>
<MdDelete style={{fontSize:"20px",border:"3px solid red",width:"60px",height:"30px"}}/>
</div>
        </div>
       
   
       </div>
    </div>
  )
}

export default CreateProduct
