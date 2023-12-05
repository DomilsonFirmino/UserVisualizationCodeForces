import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SubmissionList from "../components/SubmissionList";
import Submission from "../components/Submission";
import UserError from "../components/UserError"

let Url = "https://codeforces.com/api/user.status?handle";
/*
const problems = new Set();
*/
function ProblemNumber(info){
    problems.add({problemName: info.problem.name});
}
function UserDetails(){
   
    const { id } = useParams();
    const [user,setUser] = useState(()=>[]);
    const [info, setInfo] = useState(()=>false);
    const [problems, setProblems] = useState(()=>[]);
    const [Error, setError] = useState(()=>"")

    useEffect(()=>{
        
        const fetchData = async ()=>{
           
            const response = await fetch(Url + "="+id+"&from=1&count=20");
            const data = await response.json();
            if(data.status === "FAILED"){
                setError("usuario não existe")
            }else{
                setUser(()=>data.result);
                setProblems(()=>new Set(data.result.map((info,index) => info.problem.name)))
            }
            
            setInfo(true);
        }

        fetchData();

    },[])

    return(
        <div>
            {info === false ? 
                <p>Carregando todas as informações ...</p>
                : 
                Error === ""?
                <div>
                    <p className="fw-600 fs-600" style={{marginBottom: "1rem"}}>Usuario: <span className="fw-400 fs-400">{id}</span></p>
                    
                    { user.length === 0 ? <p>😮 WOW que vazio, não tem nada para ver aqui</p>
                        :
                        <>
                            <p  style={{marginBottom: ".5rem"}}>Ultimas submissões</p>
                            <SubmissionList>
                                {
                                    user.map(info => {
                                        return(
                                            <Submission key={info.id} information={info} />
                                        )
                                    })
                                }
                            </SubmissionList>
                        </>
                    }
                </div>
                :
                <UserError error={Error}/>

            }
            <p style={{marginTop: "1rem"}}>
                <Link to="/users">Ver todos usuarios</Link>
            </p>
        </div>
    )
}

export default UserDetails;