import { Link } from "react-router-dom";


export default function Item(props) {


    return (

        <div className="card rounded-3 shadow p-1 m-1 " style={{ width: "15rem" }}>
            <h4 className="card-header">{props.name}</h4>
            <img src={props.img} alt="ropa" />

            <div className="card-body d-flex flex-column fw-bold">

                <span>$ {props.price}</span>
                <div className="card-footer fw-bold p-1">
                    <Link className="text-decoration-none" to={`/item/${props.id}`}>Ver detalle</Link>
                </div>
            </div>
        </div >

    );
}
