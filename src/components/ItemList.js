
import Item from "./Item";
import foto1 from "../img/sweater.jpg";
const { useEffect, useState } = require("react");

export default function ItemList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        new Promise((resolve, reject) => {

            const data = [
                {
                    id: "1",
                    name: "BUZOS",
                    description: "Interior de felpa",
                    img: "../img/buzo.jpg",
                    stock: 5
                },
                {
                    id: "2",
                    name: "CAMISAS",
                    description: "Camisas de algodon curado",
                    img: "../img/camisa.jpg",
                    stock: 3
                },
                {
                    id: "3",
                    name: "SWEATERS",
                    description: "Sweaters de lana natural",
                    img: "/img/sweater.jpg",
                    stock: 6
                }
            ];
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