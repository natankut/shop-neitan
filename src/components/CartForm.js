import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


function CartForm() {

    const { tomarDatos, finalizarCompra, vaciarCarrito, submitBotton } = useContext(CartContext)

    return (

        <div>
            <form onSubmit={submitBotton} style={{ width: "100%", size: "200px" }}>
                <h2 style={{ backgroundColor: "#ffffff8f", textAlign: "center", fontSize: "2rem", fontWeight: "700", marginBottom: "30px" }}>Datos para finalizar la compra</h2>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}>
                    <label>
                        <input style={{ width: "400px", height: "30px", fontSize: "1.1rem" }} name="email" type="email" onChange={tomarDatos} placeholder="Correo electrónico" />
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                        <input style={{ width: "400px", height: "30px", fontSize: "1.1rem" }} name="phone" type="phone" onChange={tomarDatos} placeholder="Teléfono" />
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                        <input style={{ width: "400px", height: "30px", fontSize: "1.1rem" }} name="name" type="name" onChange={tomarDatos} placeholder="Nombre y Apellido" />
                    </label>
                    <br></br>
                    <br></br>
                </div>

                <div className="d-flex justify-content-around">

                    <imput type="button" className="btn btn-success fw-bold" onClick={() => finalizarCompra()} style={{ color: "black", width: "10rem", fontSize: "1.2rem", textAlign: "center" }} type="submit" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Confirmar compra </imput>

                    <div className="modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">LISTO! Que lo disfrutes!</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link to="/"><button className="btn btn-warning fw-bold" style={{ color: "black", width: "10rem", fontSize: "1.2rem", textAlign: "center" }} type="submit">Seguir comprando </button></Link>

                    <Link to="/"><button className="btn btn-danger fw-bold" style={{ color: "black", width: "10rem", fontSize: "1.2rem", textAlign: "center" }} onClick={vaciarCarrito} type="submit">Cancelar compra</button></Link>
                </div>
            </form>
        </div>
    )

};

export default CartForm;