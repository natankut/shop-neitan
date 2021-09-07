import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemCart = ({ props }) => {

    const { deleteItem } = useContext(CartContext);

    return (
        <div className="container">
            <div className="card">
                <div className="box">
                    <div className="content">
                        <img src={props.img} alt={props.name} />
                        <div className="descripcion">
                            <h3>{props.name}</h3>
                            <h3> Precio: $ <span>{props.price}</span></h3>
                            <br></br>
                            <h4> {props.description}</h4>
                            <div><button onClick={() => deleteItem(props.id)} className="btnModCom">Eliminar</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCart;

