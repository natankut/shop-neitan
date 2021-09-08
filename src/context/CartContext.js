import React, { useState, useEffect } from 'react';
import ItemDetail from '../components/ItemDetail';


export const CartContext = React.createContext();



export default function CartProvider(props) {


    const [cart, setCart] = useState([]);
    const [cartLength, setCartLength] = useState(0);
    const [total, setTotal] = useState(0);

    const addToCart = (item, cantidad) => {
        const freshCart = [...cart, { id: item.id, name: item.name, img: item.img, quantity: cantidad }];
        setCart(freshCart)
    }

    const addItem = (item) => {
        setCart([...cart, item])
    }

    const editCart = (itemEditado) => {
        const editado = cart.map((item) =>
            item.id === itemEditado.id ? itemEditado : item
        );
        setCart(editado);
    };

    const isInCart = (id) => {

        const verificar = cart.filter((item) => item.id === id);
        return (verificar.length > 0);
    };

    const vaciarCarrito = () => {
        setCart([])
    };

    //funcion para remover un Item del carrito
    const deleteItem = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    };

    useEffect(() => {

        let cartAux = 0
        for (let itemDelCarrito of cart) {
            cartAux += itemDelCarrito.cantidad
        }

        return setCartLength(cartAux)
    }, [cart]);

    return (
        <>
            <CartContext.Provider value={[cart, setCart, isInCart, editCart, vaciarCarrito, deleteItem, cartLength, total, addItem, addToCart]}>
                {props.children}
            </CartContext.Provider>
        </>
    );
};