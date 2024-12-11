import { useRoutes, BrowserRouter } from 'react-router-dom'
import { CreateShoppingProvider } from '../../Context'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SignIn } from '../SignIn'
import { NavBar } from '../../Components/Navbar'
import { Layout } from '../../Components/Layout'


function App() {

  const AppRoutes = () => {
    let routes = useRoutes([
      { path: '/', element: <Home/> },
      { path: '/myaccount', element: <MyAccount/> },
      { path: '/myorder', element: <MyOrder/> },
      { path: '/myorders', element: <MyOrders/> },
      { path: '/signin', element: <SignIn/> },
      { path: '/*', element: <NotFound/> },
    ])

    return routes
  }

  return (
    <>
      <CreateShoppingProvider>
        <div className='bg-red-500'>
          <BrowserRouter>
            <NavBar/>
            <Layout>
              <AppRoutes/>
            </Layout>
          </BrowserRouter>
        </div>
      </CreateShoppingProvider>
        
    </>
  )
}

export default App
