import React, { useState } from 'react';

export default function Contador(props) {
    const [count, setCount] = useState(parseInt(props.cantProd));
    const [stock, setStock] = useState(parseInt(props.actualStock));

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

    return (
        <>
            <h2>Cantidad: {count}</h2>

            <div>
                <button className="btn btn-success m-1" onClick={() => sumarProd()}>
                    +
                </button>
                <button className="btn btn-success" onClick={() => restarProd()}>
                    -
                </button>
                <button className="btn btn-danger m-1" onClick={() => props.onClick(count)} >AGREGAR {" "}</button>
            </div>
        </>
    );
}