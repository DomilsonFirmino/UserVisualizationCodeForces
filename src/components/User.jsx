import { Link } from "react-router-dom";
import "./user.css"

function User({user}){
    var date = new Date(user.lastOnlineTimeSeconds * 1000);
    return(
        <div className="User">
            <img src={user.titlePhoto} alt={user.handle} className="userImage"/>
            
            <div className="body">

                <div className="bodyInfo">
                    <p className="fw-600">Usuario: <span className="fs-300 fw-400">{user.handle}</span></p>
                    <p className="fw-600">Ultimo Login: <span className="fs-300 fw-400">{` ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</span></p>
                    <p className="fw-600">Pelas <span className="fs-300 fw-400">{`${date.getHours()}H : ${date.getMinutes()}Min`}</span></p>
                </div>

                <Link to={user.handle}><button className="fw-600"> Saber mais ➡</button></Link>

            </div>
        </div>
    )
}

export default User;