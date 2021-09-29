import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import "../css/ItemDetail.css";
import Contador from "./ItemCount";
import { CartContext } from '../context/CartContext';



function ItemDetail(props) {

    const { cart, addItem } = useContext(CartContext);
    const [terminar, setTerminar] = useState(false);
    const [newInitial, setNewInitial] = useState(props.initial);

    useEffect(() => {
        const checkCart = cart.findIndex((obj) => obj.id === props.id);
        if (checkCart >= 0) {
            const actualInitial = cart[checkCart].quantity
            setNewInitial(actualInitial);

            console.log(`Cart al cargar con initial: ${actualInitial} es`, cart);
        }
    }, [cart, props.id, props.initial, props.stock]);


    const agregarAlCarrito = (cantProducto) => {
        setTerminar(!terminar)
        addItem(props, cantProducto)
    }

    console.log(cart)


    return (
        <div>
            <div className="d-flex justify-content-between">
                <div className="p-3">
                    <img src={props.img} />
                </div>
                <div className="character rounded border border border-light m-1">
                    <h2>{props.name}</h2>
                    <h4>$ {props.price}</h4>
                    <h3>stock {props.stock}</h3>

                    {terminar ? (
                        <Link to="/cart"><button className="btn btn-danger">Ir al carrito</button></Link>
                    ) : (

                        <Contador

                            initial={props.initial}
                            stock={props.stock}
                            onClick={(cant) => agregarAlCarrito(cant)}

                        />
                    )}

                </div>

            </div>
            <Link className="btn btn-warning text-decoration-none m-1" to={`/category/${props.category}`}> Volver a categorias </Link>
        </div>
    );
}

export default ItemDetail;