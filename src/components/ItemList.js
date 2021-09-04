import Item2 from "./Item"


export default function ItemList({ products }) {
    return (
        <div className="d-flex justify-content-center">
            {products.map((item) => (
                <Item2 {...item}
                    key={item.id}
                />
            ))}
        </div>
    );
}