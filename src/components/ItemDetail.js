import { Link } from 'react-router-dom';
import "../css/ItemDetail.css";

function ItemDetail(props) {


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
                    <button className="btn btn-danger">COMPRAR</button>

                </div>

            </div>
            <Link className="text-decoration-none" to={`/`} >Volver a categorias</Link>
        </div>
    );
}

export default ItemDetail;