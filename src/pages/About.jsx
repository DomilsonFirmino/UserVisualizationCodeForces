import { Link } from "react-router-dom";

function About(){
    return (
        <div className="container top-2">
            <h2 style={{color: "var(--clr-pop)"}}>Sobre Esta pagina</h2>
            <div className="top-_1">
                <p style={{marginBottom: ".5rem"}}>
                    Esta plataforma visa simplificar a gestão dos alunos na jornada da programação competitiva.
                    Nosso objetivo principal é criar um ambiente eficiente para administrar assiduidade e comprometimento,
                    com especial ênfase em aprimorar o desempenho por meio de um acompanhamento personalizado.
                </p>
                <p>
                Ao oferecer um acompanhamento contínuo, buscamos proporcionar uma experiência enriquecedora,
                    estimulando não apenas a participação regular,mas também o desenvolvimento constante nas habilidades de programação.
                    Adotando uma abordagem semanal, nosso objetivo é auxiliar os alunos a aprimorar suas habilidades ao longo do tempo.
                </p>
                <p>
                    Comprometemo-nos em criar um espaço inspirador que fomente a paixão pela resolução de problemas e promova a camaradagem entre os participantes.
                    Nossa plataforma é dedicada a ser uma ferramenta valiosa para impulsionar o progresso e o envolvimento ativo na programação competitiva.</p>
                <p>
                    Temos uma lista de todos os membros ativos do ICPC no INSTIC com conta no Codeforces, para visualizar os membros
                    so clicar neste link <Link to="/users">Usuarios</Link>, que todas as informações estarão disponibilizadas lá
                </p>
            </div>
        </div>
    )
}

export default About;