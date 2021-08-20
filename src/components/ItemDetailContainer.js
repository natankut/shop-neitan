import ItemDetail from './ItemDetail';
import { useState, useEffect } from 'react';
import { productos } from './productos';
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer() {

    const [prod, setProd] = useState([]);

    const { id } = useParams();

    const getItem = () => {
        new Promise((resolve, reject) => {

            setTimeout(() => {
                const x = productos.filter((item) => item.id == id)
                resolve(x)
            }, 2000)
        })
            .then(dataResolve => {
                setProd(dataResolve);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getItem();
    }, [])


    return (
        <>
            {prod.map((item) => {
                return (
                    <ItemDetail id={item.id} name={item.name} image={item.img} price={item.price} stock={item.stock} description={item.description} />
                )
            })

            }
        </>
    )
}