import React from "react";
import Familia from "./components/basicos/Familia";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento.jsx';
import Aleaotrio from "./components/basicos/Aleaotrio";
import Card from "./components/layout/Card"
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";

import ListaProdutos from "./components/repeticao/ListaProdutos";
import "./App.css"
export default _ => {
    return (
        <div className="app" >
            <h1>Fundametos React</h1>
            <div className="Cards">
                <Card titulo="Tabela Produtos" color="#b228">
                    <ListaProdutos />
                </Card>
                <Card titulo="Tabelas Alunos" color="#c8B">
                    <ListaAlunos />
                </Card>
                <Card titulo="Componente Filho" color="#0AB">
                    <Familia sobrenome="Silva" >
                        <FamiliaMembro nome="Patrick" />
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Lucas" />
                    </Familia>
                </Card>
                <Card titulo="Desafio Aleatorio" color="#080">
                    <Aleaotrio min={1} max={15} />
                </Card>
                <Card titulo="Fragmento" color="E94C6f">
                    <Fragmento />
                </Card>
                <Card titulo="Com Parametro" color="#E8B71A">
                    <ComParametro
                        titulo="Situação"
                        nome="Patrick Patchelli"
                        nota={6.7}
                    />
                </Card>
                <Card titulo="Primeiro" clor>
                    <Primeiro />
                </Card>
            </div>
        </div >
    )
}