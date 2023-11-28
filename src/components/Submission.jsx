function Submission({information}){
    const SubDate = new Date(information.creationTimeSeconds * 1000)
    return(
        <div className="submission">
            <p className="fw-600">Nome do problema: <span className="fw-400">{information.problem.name}</span></p>
            <p className="fw-600">Data de submissão: <span className="fw-400">{SubDate.getDate()}/{SubDate.getMonth() + 1 }/{SubDate.getFullYear()}  {SubDate.getHours()}:{SubDate.getMinutes()}</span></p>
            <p className="fw-600">Veredito: <span className={information.verdict !== "OK" ? "red": "green"}>{information.verdict}</span></p>
        </div>
    )
}
export default Submission;