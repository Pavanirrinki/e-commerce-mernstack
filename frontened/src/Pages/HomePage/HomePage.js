import React, { useState, useEffect } from 'react';
import "./HomePage.css"
import groceries from "../../Images/6ca8f02f56d48f0daf38063da995e763.png"
import mobiles from "../../Images/download.jpeg"
import Travel from "../../Images/aeroplane.jpg"
import Toys_beauty from "../../Images/images.jpeg"
import Two_wheeler from "../../Images/bike-png-from-pngfre-36.png"
import Appliances from "../../Images/Electronics.jpg"
import Electronics from "../../Images/lovepik-computer-notebook.png"
import Home_furniture from "../../Images/Electronic-Kitchen-Appliances.png"
import Fashion from "../../Images/fashion-verge.avif"
import  Carousel  from '../../Components/Carousel';
import CategoryProducts from '../../Components/Category_products/CategoryProducts';
import Dropdown from '../../Components/Dropdowns/Dropdown';
function HomePage() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleMouseOver = (category) => {
    setActiveCategory(category);
  }

  const handleMouseOut = () => {
    setActiveCategory(null);
  }

  return (
    <div>
      <ul style={{listStyleType:"none",marginTop:"10px"}} className='categories-types'>
        <div>
            <img src={groceries} style={{width:"100px",height:"100px"}}/>
        <li style={{textAlign:"center"}}>Grocery</li>
        </div>
        <div>
        <img src={mobiles} style={{width:"100px",height:"100px"}}/>
        <li style={{textAlign:"center"}}>Mobiles</li>
        </div>
        <div style={{position:"relative",cursor:"pointer"}}  onMouseOver={() => handleMouseOver("fashion")} 
        onMouseOut={handleMouseOut}>
        <img src={Fashion} style={{width:"100px",height:"100px"}}/>
        <li style={{textAlign:"center"}} >Fashion</li>
        {activeCategory === "fashion" &&  <Dropdown activeCategory={activeCategory}/>}
        </div>
        <div style={{position:"relative",cursor:"pointer"}} onMouseOver={() => handleMouseOver("electronics")} 
        onMouseOut={handleMouseOut}>
        <img src={Electronics} style={{width:"100px",height:"100px"}}/>
        <li style={{textAlign:"center"}}>Electronics</li>
        {activeCategory === "electronics" && <Dropdown activeCategory={activeCategory}/>}
        </div>
        <div style={{position:"relative"}} onMouseOver={() => handleMouseOver("home&furniture")} 
        onMouseOut={handleMouseOut}>
        <img src={Home_furniture} style={{width:"100px",height:"100px"}}/>
        <li style={{textAlign:"center"}}>Home & Furniture</li>
        {activeCategory === "home&furniture" && <Dropdown activeCategory={activeCategory}/>}
        </div>
        <div>
        <img src={Appliances} style={{width:"100px",height:"100px"}}/>
        <li style={{textAlign:"center"}}>Appliances</li>
        </div>
        <div>
        <img src={Travel} style={{width:"100px",height:"100px"}}/>
        <li>Travel</li> 
        </div>
        <div style={{position:"relative"}} onMouseOver={() => handleMouseOver("Beauty&Toys")} 
        onMouseOut={handleMouseOut}>
        <img src={Toys_beauty} style={{width:"100px",height:"100px"}}/>
        <li style={{textAlign:"center"}}>Beauty,Toys & More</li> 
        {activeCategory === "Beauty&Toys" && <Dropdown activeCategory={activeCategory}/>}
        </div>
        <div>
        <img src={Two_wheeler} style={{width:"100px",height:"100px"}}/>
        <li style={{textAlign:"center"}}>Two Wheelers</li>
        </div>
      </ul>

<Carousel />

   <CategoryProducts />




    

    </div>
  )
}

export default HomePage
