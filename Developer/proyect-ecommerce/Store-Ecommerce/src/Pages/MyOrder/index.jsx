import { useContext } from 'react'
import { CreateShoppingContex } from '../../Context'
import { OrderCard } from '../../Components/OrderCard'
import { Link } from 'react-router-dom'

function MyOrder() {
  const context = useContext(CreateShoppingContex)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length - 1

  return (
    <>
      <div className='flex justify-center items-center w-[340px] p-5 border-b border-gray-300 relative'>
        <Link to='/myorders' className='absolute left-0'>
          <div className="cursor-pointer hover:rotate-180 transform transition-transform duration-300">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="size-6">
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </div>
        </Link>
        <h1 className='font-medium text-xl bg-gradient-to-r from-[#071952] to-[#088395] bg-clip-text text-transparent'>My Order</h1>
      </div>
      <div className="px-4 py-5 overflow-y-auto h-full">
        {context.order.length > 0 ? (
          context.order?.[index]?.products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        ) : (
          <div className="no-products animate-fadeInScale">
            <p className="text-lg font-medium text-[#071952]">No orders found.</p>
          </div>
        )}
        </div>
    </>
  )
}

export { MyOrder }