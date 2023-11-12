import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import "./Header.css";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg';
function Header() {
  return (
    <div>
  <ul className='unorder-list'>
    <li>logo</li>
    <li>
  <div class="search-container">
    <input type="search" placeholder="search products here......" />
    <AiOutlineSearch className="search-icon" />
  </div>
</li>

    <li>Become a seller</li>
    <li>
<div className='container'>  
  <AiOutlineShoppingCart className='cart-icon'/>  
<p className='para'> Cart </p> 
      </div>
      </li>
    <li  style={{marginRight:"30px"}}>
     

<div class="dropdown">
<CgProfile className='profile-pic'/>
  <div class="dropdown-content">
    <a href="#">LOG IN</a>
    <a href="#">SIGN UP</a>
    <a href="#">MY ORDERS</a>
    <a href="#">WISHLIST</a>
  </div>
</div>




      </li>
  </ul>



    </div>
  )
}

export default Header
