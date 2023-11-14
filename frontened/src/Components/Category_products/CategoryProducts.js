import React, { useState } from 'react';
import './CategoryProducts.css';

import groceries from "../../Images/6ca8f02f56d48f0daf38063da995e763.png"
import mobiles from "../../Images/download.jpeg"
import Travel from "../../Images/aeroplane.jpg"
import Toys_beauty from "../../Images/images.jpeg"
import Two_wheeler from "../../Images/bike-png-from-pngfre-36.png"
import Appliances from "../../Images/Electronics.jpg"
import Electronics from "../../Images/lovepik-computer-notebook.png"
import Home_furniture from "../../Images/Electronic-Kitchen-Appliances.png"
import Fashion from "../../Images/fashion-verge.avif"


import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

function CategoryProducts() {
  const [slide, setSlide] = useState(0);
  const images = [Travel,mobiles,groceries,Fashion,Home_furniture,Electronics,Appliances,Two_wheeler,Toys_beauty];

  const forwardimages = () => {
    setSlide((prevSlide) => (prevSlide + 6) % images.length);
  };

  const previousimages = () => {
    setSlide((prevSlide) => (prevSlide - 6 + images.length) % images.length);
  };

  return (
    <div>
      <h5 className="category_heading">Best Of Electronics</h5>
      <div style={{display:"flex",alignItems:"center"}}>
        <BsArrowLeftCircleFill className="arrow1" onClick={previousimages} />
        <div className='image-slider'>
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`image-${idx}`}
              className={idx >= slide && idx < slide + 6 ? 'visible' : 'hidden'}
              style={{ width: "200px", height: "200px", border: "1px black solid",marginLeft:"30px"}}
            />
          ))}
        </div>
        <BsArrowRightCircleFill className="arrow1" onClick={forwardimages} />
      </div>
    </div>
  );
}

export default CategoryProducts;
