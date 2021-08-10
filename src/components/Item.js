import foto1 from "../img/sweater.jpg";

export default function Item(props) {



    return (
        <div className="d-flex justify-content-around">
            <div className="card shadow p-2 m-1">
                <h3 className="card-header">{props.name}</h3>
                <img width="200px" src={foto1} alt="ropa" />
                <span>{props.description}</span>
            </div>
        </div>
    );
}
