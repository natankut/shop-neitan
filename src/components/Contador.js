import React, { useState } from 'react';

export default function Contador({ cantProd, actualStock }) {
    const [count, setCount] = useState(parseInt(cantProd));
    const [stock, setStock] = useState(parseInt(actualStock));

    function sumar() {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    function restar() {
        if (count > 1) {
            setCount(count - 1)
        }
    };

    return (
        <>
            <h2>Contador: {count}</h2>

            <button text="SUMAR" onClick={() => setCount(count + 1)}>
                +
            </button>
            <button text="RESTAR" onClick={() => setCount(count - 1)}>
                -
            </button>
        </>
    );
}