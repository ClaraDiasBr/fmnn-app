import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import { API } from "aws-amplify";
import { useAppContext } from "../../libs/contextLib";
import { useHistory } from "react-router-dom";
import "./Card.css";
import lista from "./ListaProdutos";


export default function CardProducts () {
 
    const [pedido, setPedido] = useState(false);
    const { isAuthenticated } = useAppContext();
    const history = useHistory();

    const produtos = lista.filter(produto => produto.cat === 'brinquedo');

    async function handleSubmit(event) {
        event.preventDefault();
        setPedido(true);
        
        if (pedido.lenght>0){
            alert('Pedido realizado: ');
        }
        try {
            await sendOrderEmail();
            history.push("/");
        } catch (e) {
            alert('Erro! Não reservou');
        }
        setPedido(false);
    }
    
    function sendOrderEmail(order){
        return API.get("MinionShop", "/sendOrder", {
            body: order
            }
        );
    }     

   return(

    <div className="card-products">
      {produtos.map(produto =>(
     <ul key={produto.id}>
        <img src={produto.foto} className= "card-products__image " alt={produto.nome}/>
        <div className="card-products__info">
            <h1 className="card-products__title">{produto.nome} </h1>
            <span className="card-products__price">R$ {produto.preco}</span>
            <footer className="card-products__footer">
                <div className="card-products__description">{produto.desc}</div>
                <div className="card-products__button">
                    {isAuthenticated ? 
                    
                        <Button value={produto.nome} onClick={handleSubmit}>Reserve!</Button>
                      : 
                        <>
                            <div className="alerta-nao-autenticado">
                            <p>Ops! Faça o Login para reservar</p>
                            </div>
                        </>
                     

                    }
                </div>
            </footer>


        </div>
        </ul>
        ))}
    </div>

   );
    
   
    

};

//export default CardProducts;