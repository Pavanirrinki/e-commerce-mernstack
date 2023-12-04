import React,{useState} from 'react'
import "./Dropdown.css"
function Dropdown({activeCategory}) {
  const [subactiveCategory,setSubactiveCategory] = useState(null)
  const Selectsubcategory = (category) => {
    setSubactiveCategory(category);
  }

  const handleSelectsubcategory = () => {
    setSubactiveCategory(null);
  }
  return (
<div>

<div  className='dropdown-content-products dropdown-content-container'>
    <ul style={{display:"flex",flexDirection:"column",listStyleType:"none"}}>
      {activeCategory === "fashion" &&
        <>
        <li onMouseOver={() => Selectsubcategory("menstopwear")} onMouseOut={handleSelectsubcategory}>Men's Top Wear</li>
        <li onMouseOver={() => Selectsubcategory("mensbottomwear")} onMouseOut={handleSelectsubcategory}>Men's bottom Wear</li>
         <li onMouseOver={() => Selectsubcategory("womenEthnic")} onMouseOut={handleSelectsubcategory}>Women Ethnic</li>
        <li onMouseOver={() => Selectsubcategory("womenwestern")} onMouseOut={handleSelectsubcategory}>Women Western</li>
        <li onMouseOver={() => Selectsubcategory("mensfootwear")} onMouseOut={handleSelectsubcategory}>Mens Footwear</li>
        <li onMouseOver={() => Selectsubcategory("womenfootwear")} onMouseOut={handleSelectsubcategory}>Women Footwear</li>
        <li onMouseOver={() => Selectsubcategory("watchesandaccessories")} onMouseOut={handleSelectsubcategory}>Watches and Accessories</li>
        <li onMouseOver={() => Selectsubcategory("Bagsandluggage")} onMouseOut={handleSelectsubcategory}>Bags,Suitcases & Luggage</li>
        <li onMouseOver={() => Selectsubcategory("kids")} onMouseOut={handleSelectsubcategory}>Kids</li>
        </>}








         {activeCategory === "electronics" &&
        <><li>Electronic</li><li>Electronic</li><li>Electronic</li><li>Electronic</li><li>Electronic</li></>}
         {activeCategory === "home & furniture" &&
        <><li>home&furniture</li><li>home&furniture</li><li>home&furniture</li><li>home&furniture</li>
        <li>home&furniture</li></>}
        {activeCategory === "beauty & toys" &&
        <><li>Beauty&Toys</li><li>Beauty&Toys</li><li>Beauty&Toys</li><li>Beauty&Toys</li>
        <li>Beauty&Toys</li></>}
    </ul>
    <ul style={{display:"flex",flexDirection:"column",listStyleType:"none"}}>
      {subactiveCategory === "menstopwear" &&
        <><li>More Mens Top Wear</li>
        <li>All</li>
        <li>Mens T-Shirts</li>
        <li>Mens Casual Shirts</li>
        <li>Mens Formal Shirts</li>
       
        <li>Mens Kurtas</li>
        <li>Mens Ethnic Sets</li>
        <li>Mens Blazzers</li>
        </>}
        {subactiveCategory === "mensbottomwear" &&
        <><li>More Mens Top Wear</li>
        <li>All</li>
        <li>Mens Jeans</li>
        <li>Mens Trousers</li>
        <li>Mens Trackpants</li>
       
        <li>Mens Shorts</li>
        <li>Mens Cargons</li>
        <li>Mens Threefourths</li>
        </>}
        {subactiveCategory === "womenEthnic" &&
        <><li>More women Ethnic</li>
        <li>All</li>
        <li>Women Sarees</li>
        <li>Women kurtas&kurtis</li>
        <li>Women Dressmaterial</li>
       
        <li>Women Dresses</li>
        <li>Women Cargons</li>
        <li>Women Gowns</li>
        </>}   
        {subactiveCategory === "womenwestern" &&
        <><li>More women Western</li>
        <li>All</li>
        <li>Women Tops</li>
        <li>Women T-shirts& polo T-shirt</li>
        <li>Women Jeans</li>
       
        <li>Women Nighties</li>
        <li>Women Night Dressses</li>
        <li>Women Track pants</li>
        </>}  
         {subactiveCategory === "mensfootwear" &&
        <><li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        </>}   
        {subactiveCategory === "womenfootwear" &&
        <><li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        </>}   
        {subactiveCategory === "watchesandaccessories" &&
        <><li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        </>}   
        {subactiveCategory === "Bagsandluggage" &&
        <><li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        </>}   
        {subactiveCategory === "kids" &&
        <><li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        </>}
    </ul>
    </div>
</div>
  )
}

export default Dropdown
