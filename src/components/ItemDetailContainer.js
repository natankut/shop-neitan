import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsJson } from "./productsJson";
import ItemDetail from "./ItemDetail";

import "../css/ItemDetail.css";

export default function ItemDetailContainer() {

    const [products, setProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(productsJson.filter((item) => item.id === id))
                , 2000
            );
        })
            .then((data) => {
                setProducts(data[0]);
            })
            .catch((error) => {
                console.log("error", error);
            })
    }, []);


    return (
        <div className="container shadow BackgroundItemDetCont">
            <ItemDetail {...products} />

        </div>
    )
};