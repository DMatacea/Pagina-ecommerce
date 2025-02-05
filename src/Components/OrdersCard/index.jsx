import { useContext } from 'react'
import { CreateShoppingContex } from '../../Context'

function OrdersCard({totalPrice, totalProducts, date}) {
    const context = useContext(CreateShoppingContex)

    return (
        <div className="flex justify-between items-center w-full p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow gap-4">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">{date}</span>
            <span className="text-sm text-gray-600">{totalProducts} Articles</span>
          </div>
          <div className='flex justify-center items-center gap-4'>
            <span className="text-lg font-bold text-teal-700">${totalPrice}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
      );
    };

export { OrdersCard }