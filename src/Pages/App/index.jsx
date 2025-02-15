import { useRoutes, BrowserRouter } from 'react-router-dom'
import { CreateShoppingProvider } from '../../Context'
import { AuthProvider } from '../../Context/autentication'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
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
      { path: '/:category', element: <Home/> },
      { path: '/myaccount', element: <MyAccount/> },
      { path: '/myorder', element: <MyOrder/> },
      { path: '/myorders/last', element: <MyOrder/> },
      { path: '/myorders/:id', element: <MyOrder/> },
      { path: '/myorders', element: <MyOrders/> },
      { path: '/signin', element: <SignIn/> },
      { path: '/*', element: <NotFound/> },
    ])

    return routes
  }

  return (
    <>
      <AuthProvider>
        <CreateShoppingProvider>
          <div className='bg-zinc-50 h-[calc(100vh-1px)] w-full'>
            <BrowserRouter>
              <NavBar/>
              <CheckoutSideMenu/>
              <Layout>
                <AppRoutes/>
              </Layout>
            </BrowserRouter>
          </div>
        </CreateShoppingProvider>
      </AuthProvider>
    </>
  )
}

export default App
