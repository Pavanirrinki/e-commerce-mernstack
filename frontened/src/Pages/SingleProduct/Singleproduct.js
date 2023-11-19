import React from 'react'
import Travel from '../../Images/aeroplane.jpg'
import { FaTags } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import Rating from '../Rating&Reviews/Rating';
function Singleproduct() {
  return (
    <><div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <img src={Travel} style={{ height: '400px', width: "400px", border: '1px solid black', margin: "0px 70px 10px 10px" }} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button style={{ border: "none", backgroundColor: "#ff9f00", padding: "15px", color: "white", fontWeight: "bold", fontSize: "15px" }}>
            <FaShoppingCart style={{ fontSize: "30px", color: "white", marginRight: "10px" }} />ADD TO CART</button>
          <button style={{ border: "none", marginLeft: "30px", backgroundColor: "#f08b07", padding: "15px", color: "white", fontWeight: "bold", fontSize: "15px" }}>
            <AiFillThunderbolt style={{ fontSize: "30px", color: "white", marginRight: "10px" }} />BUY NOW</button>
        </div>
      </div>

      <div>
        <p>Lenovo IdeaPad Slim 3 Intel Core i5 12th Gen 1235U - (8 GB/512 GB SSD/Windows 11 Home)
          15IAU7 Thin and Light Laptop  (15.6 Inch, Arctic Grey, 1.63 Kg, With MS Office)</p>
        <span style={{ float: "left", color: "white", backgroundColor: "green", padding: "2px", marginRight: "10px", borderRadius: "10px" }}>4.2rating</span>
        <p>1,249 Ratings & 108 Reviews</p>
        <h6>Special Price</h6>
        <div style={{ display: "flex" }}>
          <h4 style={{ float: "left", marginRight: "10px" }}>₹ 50,000</h4>
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
    <Rating />
    </>  
  )
}

export default Singleproduct
