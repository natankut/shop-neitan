import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const UserConfirm = ({ props }) => {

    const { userInfo } = useContext(CartContext);

    return (

        <div className="container">

            <div className="border p-1">
                <h6>Nombre: <span className="fw-bolder">{userInfo.name}</span></h6>
                <h6>Tel de contacto: <span className="fw-bolder">{userInfo.phone}</span></h6>
                <h6>Email: <span className="fw-bolder">{userInfo.email}</span></h6>
            </div>

        </div>

    )
}

export default UserConfirm;