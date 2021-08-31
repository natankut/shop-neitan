import React, { useState } from 'react';

export default function Contador(props) {
    const [count, setCount] = useState(parseInt(props.initial));
    const [stock, setStock] = useState(parseInt(props.stock));

    function sumarProd() {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    function restarProd() {
        if (count > 1) {
            setCount(count - 1)
        }
    };

    console.log(props.initial)
    console.log(count)
    return (
        <>
            <h2>Cantidad: {count && count}</h2>

            <div>
                <button className="btn btn-success m-1" onClick={() => sumarProd()}>
                    +
                </button>
                <button className="btn btn-success" onClick={() => restarProd()}>
                    -
                </button>
                <button className="btn btn-danger m-1" onClick={() => props.onClick(count)}>AGREGAR</button>
            </div>
        </>
    );
}