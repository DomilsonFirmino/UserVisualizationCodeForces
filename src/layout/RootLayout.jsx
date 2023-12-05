import { Outlet, Link, NavLink } from "react-router-dom";
import "./RootLayout.css"

function RootLayout(){
    return(
        <>
            <header>
                <div className="container">
                    <div className="navbar">
                        <Link to="/">
                            <h1>Logo</h1>
                        </Link>
                        <nav>
                            <ul className="navItems">
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="users">Usuários</NavLink>
                                </li>
                                <li>
                                    <NavLink to="tutorials">Lições</NavLink>
                                </li>
                               {/*
                               <li>
                                    <NavLink to="FAQ">PMF</NavLink>
                                </li>*/}
                                <li>
                                    <NavLink to="about">Sobre</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <div className="container">
                    <p>Footer</p>
                </div>
            </footer>
        </>
    )
}

export default RootLayout;