import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsJson } from "./productsJson";
import ItemDetail from "./ItemDetail";

import "../css/ItemDetail.css";

export default function ItemDetailContainer() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve, reject) => {
            setLoading(true);
            setTimeout(() => resolve(productsJson.filter((item) => item.id === id))
                , 2000
            );
        })
            .then((data) => {
                setProducts(data[0]);
                setLoading(false);
            })
            .catch((error) => {
                console.log("error", error);
            })
    }, []);


    return loading ? (

        <div className="loadingio-spinner-bean-eater-jn47c5ktji loading">
            <div className="ldio-o84b2rt9xe">
                <div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div>
            </div></div>
    ) : (

        <div className="container shadow BackgroundItemDetCont">
            <ItemDetail {...products} />

        </div>
    )
};