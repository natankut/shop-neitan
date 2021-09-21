import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCart from "../components/ItemCart";
import { Link } from "react-router-dom";



export default function Cart() {

    const { cart, removeItem, cartLength, vaciarCarrito, total, finalizarCompra } = useContext(CartContext);


    return (
        cartLength > 0 ?

            <>
                <h3 className="mb-3">Productos en el carrito:</h3>
                <div className="container">
                    {cart.map(props => <ItemCart key={props.id} props={props} />)}
                </div>

                <div className="container d-flex justify-content-between">

                    <h3 className="border p-2 shadow m-0">Total: $ {total}</h3>

                    <button className="btn btn-danger shadow" onClick={() => { vaciarCarrito() }}>Vaciar Carrito</button>

                    <Link to="/">
                        <button className="btn btn-success shadow" onClick={() => finalizarCompra()} style={{ heigth: "100%" }}>Finalizar Compra</button>
                    </Link>

                </div>
            </> : <h3>No hay productos en tu carrito... por ahora!</h3>

    );
}