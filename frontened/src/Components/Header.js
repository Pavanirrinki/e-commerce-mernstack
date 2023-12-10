import React,{useState,useEffect} from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import "./Header.css";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';
import LOGO from "../Images/LOGO.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogIn, BiSolidCategory } from "react-icons/bi";
import { FaShop } from "react-icons/fa6";
import { PiBasketFill } from "react-icons/pi";
import { RiLoginBoxFill } from "react-icons/ri";
import { IoPersonAdd, IoPersonAddSharp } from "react-icons/io5";
function Header({setTogglehammburger,togglehammburger}) {
  const navigate = useNavigate();
  const userdetails = JSON.parse(localStorage.getItem("userdata"));
 
  return (
    // DESKTOP VERSION
    <div>
    <div className='Desktop-version' style={{marginBottom:'100px'}}>
      <ul className='unorder-list' style={{ position: "fixed", width: "100%", top: "0", zIndex: "100" }}>
        <li>
          <Link to='/'>
            <img src={LOGO} alt="logo" style={{ height: "40px", width: "120px" }} />
          </Link>
        </li>
        <li>
          <div class="search-container">
            <input type="search" placeholder="search products here......" className='input_data' />
            <AiOutlineSearch className="search-icon" />
          </div>
        </li>

        <li>Become a seller</li>
        <li>

          <div className='container' onClick={() => navigate("/Cart")}>
            <AiOutlineShoppingCart className='cart-icon' />
            <p className='para'> Cart </p>
          </div>
        </li>
        <li style={{ marginRight: "30px" }}>


          <div class="dropdown">
            <CgProfile className='profile-pic' />
            <div class="dropdown-content">
              <ul style={{ listStyleType: "none" }}>
                <li onClick={() => navigate("/login")}>LOG IN</li>
                <li onClick={() => navigate("/signup")}>SIGN UP</li>
                <li onClick={() => navigate("/Myorders")}>MY ORDERS</li>
                <li>WISHLIST</li>
                <li onClick={() => localStorage.removeItem("userdata")}>{userdetails && "LOG OUT"}</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
      </div>

    {/* MOBILE VERSION */}

<div className='mobile-version' >

<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",marginBottom:"20px"}}>
  <div>
    <GiHamburgerMenu style={{ marginLeft: "10px", position: "relative" }} onClick={()=>setTogglehammburger(prev=>!prev)}/>
    <Link to='/'>
      <img src={LOGO} alt="logo" style={{ height: "20px", width: "120px", marginLeft: "20px" }} />
    </Link>
  </div>
  <div>
    <div className='container' onClick={() => navigate("/Cart")} style={{ display: "flex", alignItems: "center" }}>
      <AiOutlineShoppingCart className='cart-icon' />
      <p className='para' style={{visibility:"hidden"}}> Cart </p>
      <CgProfile className='profile-pic' />
    </div>
  </div>
</div>
<div className="search-container" style={{display:"flex",justifyContent:"center",marginBottom:"10px"}}>
            <input type="search" placeholder="search products here......" className='input_data'/>
            <AiOutlineSearch className="search-icon" />
          </div>

<div>
{togglehammburger == true &&
  <ul
  style={{
    position: "absolute",
    left: "0",
    zIndex: "100",
    listStyleType: "none",
    left: "0",
    top: "0",
    backgroundColor: "white", 
    margin: "0px",
    padding: "0px",
    width: "50%",
    textAlign: "center",
    height: "100%",
    fontWeight: "700",
  }}
>
    <div style={{display:"flex",backgroundColor:"#2874f0",height:"50px",justifyContent:"space-around",
    color:"white",fontWeight:"lighter",alignItems:"center",marginBottom:"20px"}}>
    <li ><CgProfile /></li>
    <li>pavan irrinki</li>
    </div> 
    <div style={{display:"flex",justifyContent:"flex-start",marginLeft:"10px"}}>
    <li style={{marginRight:"10px"}}><BiSolidCategory /></li>
    <li>All Categories</li>
    </div> 
    <div style={{display:"flex",justifyContent:"flex-start",marginLeft:"10px"}}>
    <li style={{marginRight:"10px"}}><FaShop /></li>
    <li>More On Shop</li>
    </div> 
    <div style={{display:"flex",justifyContent:"flex-start",marginLeft:"10px"}} onClick={() => navigate("/Myorders")}>
    <li style={{marginRight:"10px"}}><PiBasketFill /></li>
    <li>My Orders</li>
    </div>
    <div style={{display:"flex",justifyContent:"flex-start",marginLeft:"10px"}}  onClick={() => navigate("/Cart")}>
    <li style={{marginRight:"10px"}}><AiOutlineShoppingCart /></li>
    <li>My Cart</li>
    </div>
    <div style={{display:"flex",justifyContent:"flex-start",marginLeft:"10px"}}>
    <li style={{marginRight:"10px"}}><CgProfile /></li>
    <li>My Account</li>
    </div>
    <div style={{display:"flex",justifyContent:"flex-start",marginLeft:"10px"}}  onClick={() => navigate("/login")}>
    <li style={{marginRight:"10px"}}><RiLoginBoxFill /></li>
    <li>Log In</li>
    </div>
    <div style={{display:"flex",justifyContent:"flex-start",marginLeft:"10px"}}  onClick={() => navigate("/signup")}>
    <li style={{marginRight:"10px"}}><IoPersonAddSharp /></li>
    <li>Sign Up</li>
    </div>
</ul>
}

</div>
</div>
</div>
  )
}

export default Header
