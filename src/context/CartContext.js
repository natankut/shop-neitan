import React, { useState, useEffect } from 'react';
import ItemDetail from '../components/ItemDetail';


export const CartContext = React.createContext();



export default function CartContext2(props) {
    const [cart, setCart] = useState([]);




    return (
        <>
            <CartContext.Provider value={[cart, setCart]}>
                {props.children}
            </CartContext.Provider>
        </>
    );
};