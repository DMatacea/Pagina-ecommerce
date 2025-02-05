import { useContext } from 'react'
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
    }

    const renderIcon = (id) => {

        const isCartChek = context.cartBuy.filter(product => product.id === id).length > 0

        if (isCartChek) {
            return(
                <button className="bg-zinc-500 text-white text-sm font-medium px-4 py-1 rounded-full shadow-md">
                    🛒 Add to Cart
                </button>
            )
        }else{
            return(
                <button 
                    className="bg-[#088395] text-white text-sm font-medium px-4 py-1 rounded-full shadow-md hover:bg-[#071952] transition-colors duration-300"
                    onClick={(e) => {
                        addProductToCart(e, data.data)
                    }}
                >
                    🛒 Add to Cart
                </button>
            )
        }  
    }

    return(
        <div 
            className="bg-white cursor-pointer w-56 h-72 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 z-1"
            onClick={() => openStateVisible(data.data)}
        >   
            <figure className="relative w-full h-2/3">
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
                {renderIcon(data.data.id)}
            </div>
        </div>

    )
}

export { Card }