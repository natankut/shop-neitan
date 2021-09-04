import { useContext } from "react"
import { CartContext } from "../context/CartContext"


export default function Cart() {
    const [cart, setCart] = useContext(CartContext);

    const totalPrice = cart.reduce((i, valor) => i + valor.price, 0)

    return (
        <>
            <h3>Productos en tu carrito: {cart.length}</h3>
            <h3>Total: $ {totalPrice} </h3>
        </>
    );
}