import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SubmissionList from "../components/SubmissionList";
import Submission from "../components/Submission";

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

    useEffect(()=>{
        
        const fetchData = async ()=>{
            const response = await fetch(Url + "="+id+"&from=1&count=20");
            const data = await response.json();
            setUser(()=>data.result);
            setInfo(true);
            setProblems(()=>new Set(data.result.map((info,index) => info.problem.name)))
        }

        fetchData();

    },[])

    return(
        <div>
            {info === false ? 
                <p>Carregando todas as informações ...</p>
                : 
                <div>
                    <p className="fw-600 fs-600" style={{marginBottom: "1rem"}}>Usuario: <span className="fw-400 fs-400">{id}</span></p>
                    
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
                </div>

            }
            <p style={{marginTop: "1rem"}}>
                <Link to="/users">Ver todos usuarios</Link>
            </p>
        </div>
    )
}

export default UserDetails;