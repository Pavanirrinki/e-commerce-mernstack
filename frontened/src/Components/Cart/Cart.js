import React from 'react'
import Travel from "../../Images/aeroplane.jpg"
import "./Cart.css"
import "../MyOrders/MyOrders.css";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
function Cart() {
    return (
        <div style={{display:"flex",justifyContent:"space-around"}}>
        <div className='my_cart_container'>
           <div className='my_cart_block'>
                <img src={Travel} style={{ width: "140px", height: "200px", padding: "20px" }} />
                <div style={{ margin: "auto" }}>
                    <p>POCO C55 (Power Black, 128 GB)</p>
                    <p>6 GB RAM</p>
                    <p>11,048</p>
                    <p>6 GB RAM</p>
                    <div style={{display:"flex"}}>
                <CiCircleMinus style={{fontSize:"30px",fontWeight:'bolder'}}/>
                <p style={{width:"60px",textAlign:"center",border:"1px solid black",margin:"2px 10px 2px 10px"}}>2</p>
                <CiCirclePlus style={{fontSize:"30px",fontWeight:'bolder'}}/>
                <h5 style={{margin:"0px 30px 0px 30px"}}>Save For Later</h5>
                    <h5>Remove</h5>
              </div>
             </div>
                <div style={{ margin: "auto" }}>
                    <p >Delivered on Mar29</p>
                    <p>Your item has been delivered</p>
                </div>
          </div> 
           
        </div>
        <div>
       <h4>PRICE DETAILS</h4>
       <div style={{display:"flex",justifyContent:"space-between"}}>
   <p >price</p>
   <p >deddd</p>
   </div>
        </div>
        </div>
    )
}

export default Cart
