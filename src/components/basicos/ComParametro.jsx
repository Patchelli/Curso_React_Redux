import React from "react"

export default function ComParametro(props) {
    const status = props.nota >= 7 ? "Aprovado" : "Reprovado"
    return (
        <>
            <h2>{props.titulo}</h2>
            <strong> {props.nome} </strong>
            <strong>tem nota {props.nota} : {status} </strong>
        </ >
    )
}