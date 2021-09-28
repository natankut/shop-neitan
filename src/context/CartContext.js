import React, { useState, useEffect } from 'react';
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { getData } from "../firebase";
//se crea el Contexto para ser usado en cualquier componente
//se genera un export const porque lo tengo que importar cada vez que lo quiera usar

export const CartContext = React.createContext();


//creo mi componente que va a contener mi estado global, el cual sera utilizado en App.js
export default function CartProvider({ children }) {


    const [cart, setCart] = useState([]); //este useState se va a transformar en mi estado global
    const [cartLength, setCartLength] = useState(0);
    const [total, setTotal] = useState(0);

    const [userInfo, setUserInfo] = useState({

        name: "",
        email: "",
        phone: "",

    });

    const tomarDatos = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    };

    const submitBoton = (e) => {
        e.preventDefault();
    }


    const finalizarCompra = async () => {
        console.log("Fin de compra");
        const orderCollection = doc(collection(getData(), 'orders'));

        const order = {
            buyer: userInfo,
            items: cart,
            date: Timestamp.fromDate(new Date()),
            total: total
        };
        await setDoc(orderCollection, order)
    }
    //funciones que agregan un item al CART

    const addItem = (item, cantidad) => {

        let newCart = cart;

        // saco la cuenta del precio total que se quiere agregar 
        const sumPrecio = { ...item }.price * cantidad;

        // genero mi objeto newProd para agregarlo
        let newProd = { id: item.id, name: item.name, img: item.img, quantity: cantidad, price: sumPrecio }

        if (isInCart({ ...item }.id)) {
            // si el Producto está en el carrito primero anoto en qué posición está
            const idx = newCart.findIndex((obj) => obj.id === { ...item }.id);

            // lo elimino de newCart
            newCart = newCart.filter((e) => e.id !== { ...item }.id);

            // lo agrego de nuevo en la misma posición que estaba para que al usuario no se le modifique la posición y lo vea extraño
            newCart.splice(idx, 0, newProd);

            // actualizo MyCart
            setCart(newCart)
        } else {
            // si el Producto no está en el carrito, actualizo MyCart directamente
            newCart = [...newCart, newProd];
            setCart(newCart)
        }
    }

    const isInCart = (id) => {
        const search = cart.filter((item) => item.id === id);
        return search.length > 0;
    };

    const removeItem = (producto) => {
        const myNewCart = cart.filter((e) => e.id !== producto);
        setCart(myNewCart)
    };
    const vaciarCarrito = () => {
        setCart([])
    };

    useEffect(() => {

        let inCart = 0;
        for (let i of cart) {
            inCart += i.quantity
        }
        setCartLength(inCart)

        let cartPrice = 0;
        for (let i of cart) {
            cartPrice += i.price
        }
        setTotal(cartPrice)
    }, [cart]);

    useEffect(() => {
        let cartPrice = 0;

        for (let i of cart) {
            cartPrice += i.price
        }
        return setTotal(cartPrice)
    }, [cart]);

    return (
        <>
            <CartContext.Provider value={{ cart, setCart, isInCart, vaciarCarrito, removeItem, cartLength, setCartLength, total, addItem, setTotal, finalizarCompra, tomarDatos, submitBoton }}>
                {children}
            </CartContext.Provider>
        </>
    );
};