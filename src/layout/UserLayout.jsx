import { NavLink, Outlet } from "react-router-dom";
function UserLayout(){
   return(
    <div className="container">
        <h2 style={{marginBottom:"2rem", color: "var(--clr-pop)"}}>Lista de usuarios</h2>
        <Outlet/>
    </div>
   )
}

export default UserLayout;