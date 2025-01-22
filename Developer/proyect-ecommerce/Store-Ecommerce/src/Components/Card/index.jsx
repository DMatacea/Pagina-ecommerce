import { useContext ,useState } from 'react'
import { CreateShoppingContex } from '../../Context'

function Card(data) {
    const context = useContext(CreateShoppingContex)

    const openStateVisible = (productDetails) => {
        context.setProductView(productDetails)
        context.toggleCard(productDetails.id)
    }

    const addProductToCart = (e, data) => {
        e.stopPropagation()
        context.setCardBuy([...context.cartBuy, data])
        context.setCount(context.count + 1)
        context.toggleCardBuy(data.id)
        console.log('cart: ',context.cartBuy)
    }

    return(
        <div 
            className="bg-white cursor-pointer w-56 h-72 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            onClick={() => openStateVisible(data.data)}
        >
            <figure className="relative w-full h-2/3">
                <div 
                    className="absolute top-2 right-2 flex justify-center items-center bg-white rounded-full w-8 h-8 shadow-md hover:scale-110 transition-transform duration-200"
                    onClick={(e) => {
                        addProductToCart(e, data.data)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
                <img 
                    className="w-full h-full object-cover rounded-t-lg" 
                    src={data.data.images[0]} 
                    alt={data.data.title}
                />
                <span 
                    className="absolute bottom-2 left-2 bg-white/80 text-black text-xs px-2 py-0.5 rounded-full shadow-sm">
                    {data.data.category.name}
                </span>
            </figure>
            <div className="px-4 mt-2 h-9">
                <span className="text-sm font-medium text-gray-800 block truncate">
                    {data.data.title}
                </span>
            </div>
            <div className="flex items-center justify-between px-4 mt-2">
                <span className="text-lg font-bold text-[#37B7C3]">
                    ${data.data.price}
                </span>
                <button 
                    className="bg-[#088395] text-white text-sm font-medium px-4 py-1 rounded-full shadow-md hover:bg-[#071952] transition-colors duration-300">
                    🛒 Add to Cart
                </button>
            </div>
        </div>

    )
}

export { Card }