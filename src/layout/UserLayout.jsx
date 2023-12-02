import { NavLink, Outlet } from "react-router-dom";
function UserLayout(){
   return(
    <div className="container">
        <h1 style={{marginBottom:"2rem", color: "var(--clr-pop)"}}>Lista de usuarios</h1>
        <Outlet/>
    </div>
   )
}

export default UserLayout;