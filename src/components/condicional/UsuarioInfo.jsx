import React from "react";
import IfUser from "./IfUser";

export default props => {
    const getUsuario = props.usuario || {}
    return (
        <div>
            <IfUser test={getUsuario && getUsuario.nome}>
                <div>
                    <p>Seja bem vindo <strong> {getUsuario.nome}!</strong>!</p>
                </div>
            </IfUser>
            <IfUser test={!getUsuario || !getUsuario.nome}>
                Seja bem vindo <strong> Usuario!</strong>!
            </IfUser>

        </div>
    )
}