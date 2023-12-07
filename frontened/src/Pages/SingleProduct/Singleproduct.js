import React,{useState,useEffect} from 'react'
import Travel from '../../Images/aeroplane.jpg'
import { FaTags } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import Rating from '../Rating&Reviews/Rating';
import axios from "axios";
import { API } from '../../API/API';
import Comments from '../Comments/Comments.js';

function Singleproduct() {
  const [particularproductdata,setParticularproductdata] = useState(null);
  const [imageId,setImageId] = useState(null)
useEffect(()=>{
axios.get(API+"product/656db0e4eb469dcbc456b0f2").
then((res)=>setParticularproductdata(res.data)).catch((error)=>console.log(error.message))
},[])

const imageschange=(idx)=>{
 setImageId(idx)
}
console.log(particularproductdata,'particular')
  return (
    <><div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <div style={{display:'flex'}}>
       <div style={{display:"flex",flexDirection:"column",paddingLeft:"0px"}}>
       {particularproductdata && particularproductdata?.particularproduct?.images?.map((data, idx) => {
    return (
        <img
            key={idx} 
            src={data}
            style={{ height: '100px', width: "100px", margin: "0px 0px 10px 10px" }}
            onMouseOver={() => imageschange(idx)} 
        />
    );
})}

       </div>
        <img src={!imageId ?particularproductdata?.particularproduct?.images[0]: particularproductdata?.particularproduct.images[imageId]} 
        style={{ height: '400px', width: "400px", border: '1px solid black', margin: "0px 70px 10px 10px" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button style={{ border: "none", backgroundColor: "#ff9f00", padding: "15px", color: "white", fontWeight: "bold", fontSize: "15px" }}>
            <FaShoppingCart style={{ fontSize: "30px", color: "white", marginRight: "10px" }} />ADD TO CART</button>
          <button style={{ border: "none", marginLeft: "30px", backgroundColor: "#f08b07", padding: "15px", color: "white", fontWeight: "bold", fontSize: "15px" }}>
            <AiFillThunderbolt style={{ fontSize: "30px", color: "white", marginRight: "10px" }} />BUY NOW</button>
        </div>
      </div>

      <div>
        <p>{particularproductdata?.particularproduct?.description}</p>
        <span style={{ float: "left", color: "white", backgroundColor: "green", padding: "2px", marginRight: "10px", borderRadius: "10px" }}>{particularproductdata?.rating} rating</span>
        <p>1,249 Ratings & 108 Reviews</p>
        <h6>Special Price</h6>
        <div style={{ display: "flex" }}>
          <h4 style={{ float: "left", marginRight: "10px" }}>₹ {particularproductdata?.price}</h4>
          <h6 style={{ textDecoration: "line-through", color: "grey", marginTop: "5px" }}>₹ 50,000</h6>
          <h6 style={{ color: "#228c22", marginTop: "5px", fontWeight: "bold", marginLeft: "10px" }}>33% off</h6>
        </div>
        <div>
          <h6>Available Offers</h6>
          <div>
            <FaTags />
            <span style={{ marginLeft: "20px" }}>kkkkkkkkkkkk</span>
          </div>
          <div>
            <FaTags />
            <span style={{ marginLeft: "20px" }}>kkkkkkkkkkkk</span>
          </div>
        </div>
        <div>
          <h6 style={{ marginTop: "30px" }}>Product Description</h6>
          <ul>
            <li>ppppppp</li>
            <li>AAAAAAA</li>
            <li>VVVVVVV</li>
            <li>AAAAAAA</li>
            <li>NNNNNNN</li>
            <li>KKKKKKKK</li>
          </ul>
        </div>

      </div>
    </div>
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <Rating Rating={particularproductdata?.particularproduct.rating}/>
    <div style={{textAlign:"start",marginLeft:"20%",marginRight:"2%",marginBottom:"20px",width:"60%"}}>
    <Comments comments={particularproductdata?.particularproduct.comments} rating={particularproductdata?.particularproduct?.rating}/>
    </div>
    </div>
    </>  
  )
}

export default Singleproduct
