import React from "react";
import "./Home.css";
import CardProducts from '../Card/Card';
//import item1 from "../../assets/images/products/item1.jpg"


//<CardProducts card = {card}/>

export default function Home() {



  

  return(
    <div className="Home"
         style={{
           maxWidth: 500,
           margin: '50px auto',
         }} 
    >
      <CardProducts
      />

    </div>
  )
}