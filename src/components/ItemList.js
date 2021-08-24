import Item from "./Item"


export default function ItemList({ products }) {
    return (
        <div className="d-flex ">
            {products.map((item) => (
                <Item {...item} />
            ))}
        </div>
    );
}