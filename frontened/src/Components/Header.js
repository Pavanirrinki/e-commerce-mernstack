import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import "./Header.css";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate()
  return (
    <div>
  <ul className='unorder-list' style={{marginTop:"20px"}}>
    <li>logo</li>
    <li>
  <div class="search-container">
    <input type="search" placeholder="search products here......" />
    <AiOutlineSearch className="search-icon" />
  </div>
</li>

    <li>Become a seller</li>
    <li>
      
<div className='container' onClick={()=>navigate("/Cart")}>  
  <AiOutlineShoppingCart className='cart-icon'/>  
<p className='para'> Cart </p> 
      </div>
      </li>
    <li  style={{marginRight:"30px"}}>
     

<div class="dropdown">
<CgProfile className='profile-pic'/>
  <div class="dropdown-content">
<ul style={{listStyleType:"none"}}>
    <li onClick={()=>navigate("/login")}>LOG IN</li>
    <li onClick={()=>navigate("/signup")}>SIGN UP</li>
    <li onClick={()=>navigate("/Myorders")}>MY ORDERS</li>
    <li>WISHLIST</li>
    </ul>
  </div>
</div>




      </li>
  </ul>



    </div>
  )
}

export default Header
