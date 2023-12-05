import { useEffect, useState } from "react";
import User from "../components/User";
import "./UsersList.css"

const user = [
    "SiriusStar",
    "AtaryjR",
    "angelBeast",
    "GameOver0",
    "AbimaelQuinco001",
    "MNjulio23",
    "chinda",
    "araujomc2004",
    "mukassameka",
    "kirubim23",
    "leochitaa02",
    "lesly34",
    "uchiha_pirex"
]

let Url = "https://codeforces.com/api/user.info?handles";
let handle = "";

user.forEach( (name , index) => {
    if( index === user.length - 1 ){
        handle += name;
    }else{
        handle += name + ";";
    }
})

Url += "="+handle;

function UsersList(){
    const [users,setUsers] = useState(()=>[]);
    const [info, setInfo] = useState(()=>false);
    const [userShow, setUserShow] = useState(()=>4);
    
    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch(Url);
            const data = await response.json();
            setUsers(()=>data.result);
            setInfo(true);
        }

        fetchData();

    },[]);
    
    /*user.map((name)=>{
            return(
            <p>{name}</p>
            )
    })*/
    return(
        <>
            <div className="UserList container">
                {info === false && <p>Carregando todas as informações ...</p>}
                {info === true && users.map((user,index) =>{
                    if(index < userShow){
                        return(
                            <User user = {user} key={user.handle}>
                            </User>
                        )
                    }
                })}
            </div>

            
            <div className="UserButtons">
                {
                    info === true && userShow > 4 ?
                        <button onClick={()=>setUserShow((prev)=> prev - 4)}>⬅ Mostrar menos</button>:""
                }
                {
                    info === true && userShow < user.length ?
                        <button onClick={()=>setUserShow((prev)=> prev + 4)}>Mostrar mais ➡</button>:""
                }
            </div>
        </>
    )
}

export default UsersList