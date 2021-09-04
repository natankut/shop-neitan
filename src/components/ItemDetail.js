import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/ItemDetail.css";
import Contador from "./ItemCount";
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';


function ItemDetail(props) {
    const { addItem } = useContext(CartContext);
    const [comprar, setComprar] = useState();
    const [terminar, setTerminar] = useState(false);

    const [cart, setCart] = useContext(CartContext);
    const addToCart = () => {
        const productos = { name: props.name, price: props.price }
        setCart(estado => [...estado, productos]);
        ;
    }

    const onAdd = (cantidad) => {
        setComprar(cantidad);
        setTerminar(!terminar)

    };

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
                        <Link to="/cart"><button className="btn btn-danger" onClick={addToCart}>Finalizar compra</button></Link>
                    ) : (

                        <Contador

                            initial={props.initial}
                            stock={props.stock}
                            onClick={(cant) => onAdd(cant)}
                            onAdd={setComprar}
                        />
                    )}

                </div>

            </div>
            <Link className="text-decoration-none" to={`/category/${props.category}`}> Volver a categorias </Link>
        </div>
    );
}

export default ItemDetail;