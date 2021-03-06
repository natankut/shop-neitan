import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCart from "../components/ItemCart";
import { Link } from "react-router-dom";



export default function Cart() {

    const { cart, cartLength, vaciarCarrito, total } = useContext(CartContext);


    return (
        cartLength > 0 ?

            <div className="container">
                <h3 className="mb-3">Productos en tu carrito:</h3>
                <div className="container">
                    {cart.map(props => <ItemCart key={props.id} props={props} />)}
                </div>

                <div className="container d-flex justify-content-between">

                    <h3 className="border p-2 m-0">Total de tu compra: $ {total}</h3>

                    <button style={{ width: "150px" }} className="btn btn-danger" onClick={() => { vaciarCarrito() }}>Vaciar Carrito</button>

                    <Link to="/cartForm">
                        <button style={{ width: "150px", height: "100%" }} className="btn btn-success">Finalizar Compra</button>
                    </Link>

                </div>
            </div>
            :
            <div className="container">
                <h3>No hay productos en tu carrito... por ahora!</h3>
                <Link to="/">
                    <button style={{ width: "150px", height: "100%" }} className="btn btn-success">Ir a comprar</button>
                </Link>
            </div>
    );
}