import {Link} from "react-router-dom";

import Problem from "../components/Problem";

const conhecimentoGeral =
    [
        {id:1,name:"Declaração de Variaveis", url:"/tutorials/#declVar"},
        {id:2,name:"Entrada/Saida de Dados", url:"/tutorials/#cinout"},
        {id:3,name:"Operadores matemáticos", url:"/tutorials/#opmath"},
        {id:4,name:"Operadores Lógicos",url: "/tutorials/#opelo"},
        {id:5,name:"Estruturas Condicionais",url: "/tutorials/#estruCond"}
    ]

const SingleTestMath=[
    {id:1 ,name:"Watermelon", link: "https://codeforces.com/problemset/problem/4/A"},
    {id:2 ,name:"Elephant", link:"https://codeforces.com/problemset/problem/617/A"}
]

const SingleTestString=[
    {name:"Word Capitalization", link: "https://codeforces.com/problemset/problem/281/A"}
]


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
                    {conhecimentoGeral.map( value =><Link to={value.url} key={value.id} className="mainTag">{value.name}</Link>)}
                </p>
            </div>

            <div className="problems top-2">
                
                <h2>Iniciantes</h2>

                <div className="top-1">
                    <div className="problemsList">
                        {SingleTestMath.map( problems =>{
                            return(
                                <Problem key={problems.id} problems={problems}/>
                            )
                        })}
                    </div>
                    
                    <div className="tags">
                        <p>
                            <Link to="/Tutorials" className="tag">conhecimento inicial</Link>
                        </p>
                    </div>
                </div>
              
                <div className="top-1">
                    <div className="problemsList">
                        {SingleTestString.map( problems =>{
                            return(
                                <Problem key={problems.id} problems={problems}/>
                            )
                        })}
                    </div> 
                    <div className="tags">
                        <p>
                            <Link to="/Tutorials#string" className="tag">Manipulação de string</Link>
                        </p>
                        <p>
                            <Link to="/Tutorials#string" className="tag">Metodos de strings</Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;