import {Link} from "react-router-dom";

import Problem from "../components/Problem";
import image from "../assets/LP.png"

const conhecimentoGeral = [
    { id: 1, name: "Declaração de Variaveis", url: "/tutorials/#declVar" },
    { id: 2, name: "Entrada/Saida de Dados", url: "/tutorials/#cinout" },
    { id: 3, name: "Operadores matemáticos", url: "/tutorials/#opmath" },
    { id: 4, name: "Operadores Lógicos", url: "/tutorials/#opelo" },
    { id: 5, name: "Estruturas Condicionais", url: "/tutorials/#estruCond" }
];

const SingleTestMath = [
    { id: 1, name: "Watermelon", link: "https://codeforces.com/problemset/problem/4/A" },
    { id: 2, name: "Elephant", link: "https://codeforces.com/problemset/problem/617/A" }
];

const SingleTestString = [
    { id: 1, name: "Word Capitalization", link: "https://codeforces.com/problemset/problem/281/A" },
    { id:2, name: "Again Twenty Five!", link: "https://codeforces.com/problemset/problem/630/A"}
];

const multipleTestCases = [
    { id: 1, name: "Bear and Big Brother", link: "https://codeforces.com/problemset/problem/791/A"},
    { id: 12, name: "Nearly Lucky Number", link: "https://codeforces.com/problemset/problem/110/A"},
    { id: 13, name: "Anton and Danik", link: "https://codeforces.com/problemset/problem/734/A"},
    { id: 14, name: "Tram", link: "https://codeforces.com/problemset/problem/116/A"}
];
/*
const multipleTestCases = [
    { id: 1, name: "Bear and Big Brother", link: "", tags: [{id: 300, type: "string", url: "/tutorials/#string" }, { id: 100, type: "loop", url: "/tutorials/#loop" }] },
    { id: 12, name: "Nearly Lucky Number", link: "https://codeforces.com/problemset/problem/110/A", tags: [{ id: 101, type: "loop", url: "/tutorials/#loop" }] },
    { id: 13, name: "Anton and Danik", link: "https://codeforces.com/problemset/problem/734/A", tags: [{ id: 102, type: "string", url: "/tutorials/#string" }, { id: 201, type: "loop", url: "/tutorials/#loop" }] },
    { id: 14, name: "Bear and Big Brother", link: "", tags: [{ id: 180, type: "string", url: "/tutorials/#string" }, { id: 200, type: "loop", url: "/tutorials/#loop" }] },
    { id: 15, name: "Bear and Big Brother", link: "", tags: [{ id: 190, type: "string", url: "/tutorials/#string" }, { id: 21, type: "loop", url: "/tutorials/#loop" }] }
];
*/



function Home(){
    return(
        <div className="container top-2">

            <div className="twoEqual grid gap-2">
                <div className="top-_1">
                    <h1>Melhores problemas para começar</h1>
                    <p>
                        Maioritariamente os nossos problemas são originarios da plataforma codeforces,
                        pela sua quantidade e variedade, decidimos selecionar aqueles que consideramos os melhores para quem esta a começar, separamos por niveis de dificuldade e o conceitos necessarios para a resolução dos mesmos
                    </p>
                </div>
                <div style={{maxWidth: "14rem", margin: "0 auto"}}><img src={image} alt="img" /></div>
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

                <h2>Intermedio</h2>

                <div className="top-1">
                    {/* 
                    <div className="problemsList ">
                        {multipleTestCases.map( problems =>{
                            return(
                               <Problem key={problems.id} problems={problems}>
                                    <div className="tags">
                                        {problems.tags.map( tags =>{
                                            return(
                                                <p key={tags.id} >
                                                    <Link to={tags.url} className="tag">{tags.type}</Link>
                                                </p>
                                            )
                                        })}
                                    </div>
                                    </Problem>
                            )
                        })}
                    </div>
                    */}
                    <div className="problemsList">
                        {multipleTestCases.map( problems =>{
                            return(
                                <Problem key={problems.id} problems={problems}/>
                            )
                        })}
                    </div> 
                    <div className="tags">
                        <p>
                            <Link to="/Tutorials" className="tag">Conhecimento Inicial</Link>
                        </p>
                        <p>
                            <Link to="/Tutorials#string" className="tag">Manipulação de Strings</Link>
                        </p>
                        <p>
                            <Link to="/Tutorials#loop" className="tag">Loops / Iterações</Link>
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Home;