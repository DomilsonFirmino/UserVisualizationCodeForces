import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'

/*Pages Import*/
import Home from "./pages/Home"
import UsersList from './pages/UsersList'
import About from './pages/About'

/*layout import*/
import RootLayout from "./layout/RootLayout"


function AppRouintgOld() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home/>}/>
            <Route path='users' element={<UsersList/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='*' element={"ERRO"}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouintgOld
