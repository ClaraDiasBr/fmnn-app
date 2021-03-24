import React from 'react';
import Button from 'react-bootstrap/Button'
import "./Card.css";

const CardProducts = ({card}) => {
   
   return(
    <div className="card-products">
        <img src={card.image} className="card-products__image " alt={card.title}/>
        <div className="card-products__info">
            <h1 className="card-products__title">{card.title} </h1>
            <span className="card-products__price">R$ {card.price}</span>
            <footer className="card-products__footer">
                <div className="card-products__description">{card.description}</div>
                <Button className="card-products__button">Reserve!</Button>

            </footer>


        </div>
    </div>
   )
    

}

export default CardProducts;