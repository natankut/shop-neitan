import Item from "./Item"


export default function ItemList({ products }) {
    return (
        <div className="d-flex justify-content-center">
            {products.map((item) => (
                <Item {...item}
                    key={item.id}
                />
            ))}
        </div>
    );
}