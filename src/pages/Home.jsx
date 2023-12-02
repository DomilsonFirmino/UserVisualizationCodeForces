import {Link} from "react-router-dom";

const conhecimentoGeral =
        [
            {name:"Declaração de Variaveis", url:"/tutorials/#declVar"},
            {name:"Entrada/Saida de Dados", url:"/tutorials/#cinout"},
            {name:"Operadores matemáticos", url:"/tutorials/#opmath"},
            {name:"Operadores Lógicos",url: "/tutorials/#opelo"},
            {name:"Estruturas Condicionais",url: "/tutorials/#estruCond"}
        ]

const SingleTestMath=[
    {name:"Watermelon", link: "https://codeforces.com/problemset/problem/4/A"},
    {name:"Elephant", link:"https://codeforces.com/problemset/problem/617/A"}
]

const conhecimentoSTM=[]

function Home(){
    return(
        <div className="container top-2">

            <div className="two grid gap-3">
                <div style={{maxWidth: "75ch"}} className="top-_1">
                    <h1>Melhores problemas para começar</h1>
                    <p>
                        Maioritariamente os nossos problemas são originarios da plataforma codeforces,
                        pela sua quantidade e variedade, decidimos selecionar aqueles que consideramos os melhores para quem esta a começar, separamos por niveis de dificuldade e o conceitos necessarios para a resolução dos mesmos
                    </p>
                </div>
            </div>

            <div className="top-_1">
                <p>Conhecimento inicial necessario para todos os exercicios</p>
                <p className="tags">
                    {conhecimentoGeral.map( value =><Link to={value.url} className="mainTag">{value.name}</Link>)}
                </p>
            </div>

            <div className="problems top-2">
                <h2>Iniciantes</h2>
                <div className="top-2">
                    <div className="problemsList">
                        {SingleTestMath.map( problems =>{
                            return(
                                <div className="problem top-__1">
                                    <p>{problems.name}</p>
                                    <a href={problems.link}>Resolver o problema</a>
                                </div>
                            )
                        })}
                    </div>
                    <p>
                        <Link to="/Tutorials" className="tag">conhecimento inicial</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;