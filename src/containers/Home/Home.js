import React from "react";
import "./Home.css";
import CardProducts from '../Card/Card';
import item1 from "../../assets/images/products/item1.jpg"



export default function Home() {



  const card={
    "id": 1,
    "title": "Funko",
    "price": 50,
    "image": item1,
    "orderButtom": "creatOrder",
    "description": "Funko colecionável"
  };

  return(
    <div className="Home"
         style={{
           maxWidth: 500,
           margin: '50px auto',
         }} 
    >
      <CardProducts card = {card}/>

    </div>
  )
}