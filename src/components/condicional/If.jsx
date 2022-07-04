import alunos from "../../data/alunos"
import "./If.css"
/*
<If test={exp}>
<span></span>
</If>
*/


export default props => {
    const alunosAp = alunos.map(aluno => {
        const classApply = aluno.nota >= 7 ? "Aprovado" : "Reprovado"
        return <tr key={aluno.id} className={classApply} >
            <td>{aluno.id}</td>
            <td>{aluno.nome}</td>
            <td>{aluno.nota}</td>
            <td>{aluno.nota >= 7 ? "Aprovado" : "Reprovado"}</td>
        </tr>
    });

    return (
        <div className="If">
            <table >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Nota</th>
                        <th>Situação</th>
                    </tr>
                </thead>
                <tbody>
                    {alunosAp}
                    {/* {getLinhas()} */}
                </tbody>

            </table>
        </div>
    )

}