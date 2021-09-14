import { useEffect, useState } from "react";
//import { productsJson } from "./productsJson";
import ItemList from "./ItemList";
import { Link, useParams } from 'react-router-dom';
import '../css/Loading.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { getData } from '../firebase';
import Loading from "./Loading";

export default function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { category } = useParams();


    useEffect(() => {
        setLoading(true);

        // función que busca todos los productos
        const getProds = async () => {
            const prodCollection = collection(getData(), 'productsJson');
            const prodSnapshot = await getDocs(prodCollection);
            const prodList = prodSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setLoading(false);
            setProducts(prodList);
        };

        // función que busca productos filtrados
        const getCategory = async () => {
            const prodCollection = collection(getData(), 'productsJson');
            const categoryQuery = query(prodCollection, where('category', '==', `${category}`));
            try {
                const prodSnapshot = await getDocs(categoryQuery);
                const categoryList = prodSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setLoading(false);
                setProducts(categoryList);
            } catch (err) {
                console.log(err);
            }
        };

        // elijo qué función utilizar
        if (category !== undefined) {
            getCategory();
        } else {
            getProds();
        }

    }, [category]);


    return loading ? (

        <Loading />

    ) : (

        <div className="container ">
            <div>
                <ItemList products={products} />
            </div>

            <Link to="/"><button className="btn btn-warning m-1">Home</button></Link>
        </div>
    )
};