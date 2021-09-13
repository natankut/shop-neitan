import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemCart = ({ props }) => {



    return (

        <div className="container">
            <div className="d-flex flex-row justify-content-between m-1 mb-2">
                <img src={props.img} alt={props.name} style={{ width: "3rem" }} />
                <h3>{props.name}</h3>
                <h3>{props.quantity}</h3>
                <h3>$ <span>{props.price}</span></h3>
                <div><button>Eliminar</button></div>
            </div>
        </div>

    )
}

export default ItemCart;

