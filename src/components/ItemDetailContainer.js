import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { productsJson } from "./productsJson";
import ItemDetail from "./ItemDetail";
import { collection, getDocs } from 'firebase/firestore';
import { getData } from '../firebase';
import "../css/ItemDetail.css";

export default function ItemDetailContainer() {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();


    useEffect(() => {
        setLoading(true);
        // función que busca todos los productos
        const getProduct = async () => {
            const prodCollection = collection(getData(), 'productsJson');
            const prodSnapshot = await getDocs(prodCollection);
            const prodList = prodSnapshot.docs.map(doc => ({
                id: doc.id, ...doc.data()
            }));

            // filtro el listado y busco el que quiero mostrar
            const thisProd = prodList.filter((item) => item.id === id)
            setLoading(false);
            setProduct(thisProd);
            console.log(thisProd);
        };
        getProduct();
    }, [id]);



    return loading ? (

        <div className="loadingio-spinner-bean-eater-jn47c5ktji loading">
            <div className="ldio-o84b2rt9xe">
                <div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div>
            </div></div>
    ) : (

        <div className="container shadow BackgroundItemDetCont" style={{ width: "700px" }}>

            {product.map((item) => {
                return (
                    <ItemDetail id={item.id} name={item.name} img={item.image} price={item.price} description={item.description} stock={item.stock} initial={item.initial} key={item.id} />
                )
            })
            }

        </div>
    )
};