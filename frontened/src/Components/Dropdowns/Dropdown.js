import React from 'react'
import "./Dropdown.css"
function Dropdown({activeCategory}) {
  return (
<div>

<div  className='dropdown-content-products dropdown-content-container'>
    <ul style={{display:"flex",flexDirection:"column",listStyleType:"none"}}>
      {activeCategory === "fashion" &&
        <><li>Home</li><li>Home</li><li>Home</li><li>Home</li><li>Home</li></>}
         {activeCategory === "electronics" &&
        <><li>Electronic</li><li>Electronic</li><li>Electronic</li><li>Electronic</li><li>Electronic</li></>}
         {activeCategory === "home&furniture" &&
        <><li>home&furniture</li><li>home&furniture</li><li>home&furniture</li><li>home&furniture</li>
        <li>home&furniture</li></>}
        {activeCategory === "Beauty&Toys" &&
        <><li>Beauty&Toys</li><li>Beauty&Toys</li><li>Beauty&Toys</li><li>Beauty&Toys</li>
        <li>Beauty&Toys</li></>}
    </ul>
    <ul style={{display:"flex",flexDirection:"column",listStyleType:"none"}}>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
    </ul>
    </div>
</div>
  )
}

export default Dropdown
