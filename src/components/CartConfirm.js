

const CartConfirm = ({ props }) => {



    return (

        <div className="container">
            <div className="d-flex flex-row justify-content-between m-1 mb-4">

                <img src={props.img} alt={props.name} style={{ width: "3rem" }} />
                <h3>{props.name}</h3>
                <h3>{props.quantity}</h3>
                <h3>$ <span>{props.price}</span></h3>

            </div>

        </div>

    )
}

export default CartConfirm;
