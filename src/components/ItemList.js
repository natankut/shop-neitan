import { productos } from "./productos.js";
import Item from "./Item";
const { useEffect, useState } = require("react");

export default function ItemList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        new Promise((resolve, reject) => {

            const data = productos;

            setTimeout(() => resolve(data), 2000);
        })
            .then((dataResolve) => {
                console.log("data Resolve", dataResolve);
                setProducts(dataResolve);
            })
            .catch((error) => {
                console.log("err", error);
            });

    }, []);

    return (
        <div className="d-flex justify-content-around">
            {products.map((cadaProducto) => (
                <Item {...cadaProducto} />
            ))}
        </div>
    );
}