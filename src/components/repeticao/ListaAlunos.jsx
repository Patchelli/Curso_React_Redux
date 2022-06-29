import React from "react";
import alunos from "../../data/alunos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

export default props => {
    const alunosLi = alunos.map(aluno => {
        return <li key={aluno.id} style={{ listStyle: "none" }} >
            {aluno.id}){aluno.nome}  <FontAwesomeIcon icon={faArrowCircleRight} />  {aluno.nota}
        </li>
    });
    return (
        <div>
            <ul>
                {alunosLi}
            </ul>
        </div>
    )
}