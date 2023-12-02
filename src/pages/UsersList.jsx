import { useEffect, useState } from "react";
import User from "../components/User";
import "./UsersList.css"

const user = [
    "SiriusStar",
    "AtaryjR",
    "MNjulio23",
    "angelBeast",
    "GameOver0",
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
    const [users,setUsers] = useState([]);
    const [info, setInfo] = useState(false);
    
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
        <div className="UserList container">
            {info === false && <p>Carregando todas as informações ...</p>}
            {info === true && users.map(user =>{
                return(
                    <User user = {user} key={user.handle}>
                    </User>
                )
            })}
        </div>
    )
}

export default UsersList