import { useContext } from 'react'
import { CreateShoppingContex } from '../../Context'
import { OrdersCard } from '../../Components/OrdersCard';
import { Link } from 'react-router-dom'

function MyOrders() {
  const context = useContext(CreateShoppingContex)

    return (
      <>
        <div className="w-full max-w-[376px] mx-auto">
          <div className="flex items-center justify-center mb-6">
            <h1 className="font-medium text-xl bg-gradient-to-r from-[#071952] to-[#088395] bg-clip-text text-transparent">My Orders</h1>
          </div>
          <div className="flex flex-col gap-4">
            {context.order.map((order, index) => (
              <Link key={index} to={`/myorders/${index}`}>
                <OrdersCard
                  date={order.date}
                  totalPrice={order.totalPrice}
                  totalProducts={order.totalProducts}
                />
              </Link>
            ))}
          </div>
        </div>
      </>
    )
  }
  
  export { MyOrders }