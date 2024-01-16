import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

/*Pages Import*/
import Home from "./pages/Home"
import UsersList from './pages/UsersList'
import UserDetails from './pages/UserDetails'
import About from './pages/About'
import Error from './pages/Error'
import FAQ from './pages/FAQ'
import Tutorials from './pages/Tutorials'

/*layout import*/
import RootLayout from "./layout/RootLayout"
import UserLayout from './layout/UserLayout'

const router = createBrowserRouter(
    createRoutesFromElements(
        
        <Route>
            <Route path='/' element={<RootLayout />}>
                <Route index element={<Home/>}/>
                <Route path='users' element={<UserLayout/>}>
                    <Route index element={<UsersList/>}/>
                    <Route path=':id' element={<UserDetails/>}/>
                </Route>
                <Route path='about' element={<About/>}/>
                <Route path='tutorials' element={<Tutorials/>}/>
                {/*<Route path='faq' element={<FAQ/>}/>*/}
                <Route path='*' element={<Error/>}></Route>
            </Route>
        </Route>
    )
)


function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
/*
const App = () => {
  const [exampleState, setExampleState] = useState('This is an example state');

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<RootLayout />}>
          <Route
            index
            element={<Home exampleState={exampleState} setExampleState={setExampleState} />}
          />
          <Route path='users' element={<UserLayout />}>
            <Route index element={<UsersList exampleState={exampleState} />} />
            <Route path=':id' element={<UserDetails exampleState={exampleState} />} />
          </Route>
          <Route path='about' element={<About exampleState={exampleState} />} />
          <Route path='tutorials' element={<Tutorials exampleState={exampleState} />} />
          <Route path='*' element={<Error exampleState={exampleState} />}></Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
*/