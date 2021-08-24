import { useEffect, useState } from "react";
import { productsJson } from "./productsJson";
import ItemList from "./ItemList";
import Contador from "./Contador";
import { Link } from 'react-router-dom';
import '../css/Loading.css';

export default function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        new Promise((resolve, reject) => {
            setLoading(true);
            setTimeout(() => resolve(productsJson), 2000);
        })
            .then((data) => setProducts(data))
            .finally(() => {
                setLoading(false);
            });

    }, []);


    return loading ? (

        <div className="loadingio-spinner-bean-eater-jn47c5ktji loading">
            <div className="ldio-o84b2rt9xe">
                <div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div>
            </div></div>

    ) : (

        <div className="container ">
            <div className="">
                <ItemList products={products} />
            </div>
            <div className="d-flex">
                <Contador cantProd='1' actualStock='10' />
            </div>
            <Link to="/"><button className="btn btn-warning m-1">Home</button></Link>
        </div>
    )
};