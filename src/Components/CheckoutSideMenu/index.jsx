import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { CreateShoppingContex } from '../../Context'
import { AuthContext } from '../../Context/autentication'
import { OrderCard } from '../OrderCard'

function CheckoutSideMenu(){
    const context = useContext(CreateShoppingContex)
    const contextAuth = useContext(AuthContext) 
    const navigate = useNavigate()

    const [textButton, setTextButton] = useState("Proceed to Checkout")
    
    const dateToday = new Date().toLocaleDateString()

    const totalPrice = context.cartBuy.reduce((acc, product) => acc + product.price, 0)

    const handleDelete = (id) => {
        const filterProducts = context.cartBuy.filter(product => product.id != id)
        context.setCardBuy(filterProducts)
    }

    const handleCheckout = () => {
        if(contextAuth.userVerify?.user){
            navigate('/myorders/last')
            const orderToAdd = {
                date: dateToday,
                products: context.cartBuy,
                totalProducts: context.cartBuy.length,
                totalPrice: totalPrice
              }
    
            context.setOrder([...context.order, orderToAdd])
            context.setCardBuy([])
            context.setCount(0)
            context.setCheckoutSideMenu(null)
        }else{
            setTextButton("Sing in")
            navigate('/signin')
            setTimeout(() => {
                setTextButton("Proceed to Checkout")
            }, 3000);
        }
    }

    return(
        <aside
        className={`${context.checkoutSideMenu ? 'translate-x-0' : 'translate-x-full'} 
                        fixed top-[80px] right-0 w-[320px] h-[calc(100vh-80px)] 
                        flex flex-col justify-between  border border-gray-200 bg-white shadow-2xl 
                        transition-transform duration-500 ease-in-out z-10
                        sm:rounded-lg 
                        max-sm:fixed max-sm:bottom-0 max-sm:top-auto max-sm:right-0 max-sm:left-0 max-sm:w-full max-sm:h-9/10
                        max-sm:translate-y-0 max-sm:translate-x-0 
                        ${context.checkoutSideMenu ? 'max-sm:translate-y-0' : 'max-sm:translate-y-full'} 
                        max-sm:rounded-t-2xl max-sm:rounded-b-none`}
        >
            <div className="flex justify-between items-center p-5 border-b border-gray-300">
                <h2 className="font-medium text-xl bg-gradient-to-r from-[#071952] to-[#088395] bg-clip-text text-transparent">My Order</h2>
                <div
                    onClick={() => context.toggleCardBuy(null)}
                    className="cursor-pointer hover:rotate-180 transform transition-transform duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>

            <div className="px-4 py-5 overflow-y-auto h-full">
                {context.cartBuy.map((product) => (
                    <OrderCard
                        key= {product.id}
                        id= {product.id}
                        title= {product.title}
                        imageUrl= {product.images}
                        price= {product.price}
                        handleDelete = {handleDelete}
                    />
                ))}
            </div>

            <div className="p-5 border-t border-gray-300">
                <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">Total:</span>
                    <span className="text-xl font-bold text-gray-900">
                        ${totalPrice}
                    </span>
                </div>
                    <button 
                        className="mt-4 w-full bg-[#088395] text-white font-medium py-2 rounded-lg hover:bg-[#071952] transition-colors duration-300"
                        onClick={() => handleCheckout()}
                    >
                        {textButton}
                    </button>
            </div>
        </aside>

    )
}

export { CheckoutSideMenu }