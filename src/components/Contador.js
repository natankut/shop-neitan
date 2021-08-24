import React, { useState } from 'react';

export default function Contador({ cantProd, actualStock }) {
    const [count, setCount] = useState(parseInt(cantProd));
    const [stock, setStock] = useState(parseInt(actualStock));

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
            <h2>Contador: {count}</h2>

            <div>
                <button className="btn btn-success m-1" onClick={() => sumarProd()}>
                    +
                </button>
                <button className="btn btn-success" onClick={() => restarProd()}>
                    -
                </button>
            </div>
        </>
    );
}