import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCart from "../components/ItemCart";
import { Link } from "react-router-dom";



export default function Cart() {

    const [cart, total, vaciarCarrito, cartLength] = useContext(CartContext);

    const totalPrice = cart.reduce((i, valor) => i + valor.price, 0)

    const handleVaciarCarrito = () => {
        vaciarCarrito();
    };
    return (


        <>
            <div>
                <h3 className="carrito">Productos en el carrito</h3>
                <div className="container">
                    {cart.map(props => <ItemCart key={props.id} props={props} />)}
                </div>
            </div>
            <h3>Total: $ {totalPrice}</h3>
            <div>
                <button onClick={() => { vaciarCarrito() }}>Vaciar Carrito</button>
                <button id="finalizar-compra">
                    <Link to="/">Finalizar Compra</Link></button>
            </div>
        </>

    );
}