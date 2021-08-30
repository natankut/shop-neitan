import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/ItemDetail.css";
import Contador from "./ItemCount";

function ItemDetail(props) {
    const [comprar, setComprar] = useState();
    const [terminar, setTerminar] = useState(false);


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
                        <Link to="/cart"><button className="btn btn-danger">Finalizar compra</button></Link>
                    ) : (

                        <Contador
                            initial={props.initial}
                            stock={props.stock}
                            onClick={(cant) => onAdd(cant)} />
                    )}

                </div>

            </div>
            <Link className="text-decoration-none" to={`/category/${props.category}`} >Volver a categorias</Link>
        </div>
    );
}

export default ItemDetail;