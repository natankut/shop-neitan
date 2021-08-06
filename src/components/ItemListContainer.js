import Contador from "./Contador";


export default function ItemListCont(props) {
    return (
        <div className="container">
            <p>{props.greeting}</p>
            <Contador cantProd='1' actualStock='10' />
        </div>
    )
};