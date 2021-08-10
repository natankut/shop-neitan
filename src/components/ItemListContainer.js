import Contador from "./Contador";
import ItemList from "./ItemList";

export default function ItemListCont(props) {
    return (
        <div className="container">
            <ItemList />
            <Contador cantProd='1' actualStock='10' />
        </div>
    )
};