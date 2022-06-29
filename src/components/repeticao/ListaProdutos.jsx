import React from "react";
import produtos from "../../data/produtos";
import "./ListaProdutos.css";


export default props => {
    const listProd = produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
        )
    })

    function getLinhas() {
        return produtos.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 == 0 ? "Par" : "Impar"}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2)}</td>
                </tr>
            )
        })
    }

    return (
        <div className="TabelaProdutos">
            <table >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {listProd} */}
                    {getLinhas()}
                </tbody>

            </table>
        </div>
    )
}