import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import "./Header.css";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';
import LOGO from "../Images/LOGO.png";
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
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
            <input type="search" placeholder="search products here......" />
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

<div className='mobile-version'>
<GiHamburgerMenu style={{marginLeft:"10px",position:"relative"}}/>
<Link to='/'> <img src={LOGO} alt="logo" style={{ height: "20px", width: "120px",marginLeft:"20px"}} /></Link>
<div>
<ul  style={{position:"absolute",left:"0",zIndex:"100",listStyleType:"none",left:"0",top:"0",backgroundColor:"gold",margin:"0px",   
padding:"0px",width:"30%",textAlign:"center",height:"100%"
  }}>
  <li style={{marginBottom:"0px",marginTop:"100px"}}>1234</li>
  <li style={{marginBottom:"0px"}}>1234</li>
  <li style={{marginBottom:"0px"}}>1234</li>  
  <li style={{marginBottom:"0px"}}>1234</li>
</ul>
</div>
</div>
</div>
  )
}

export default Header
