import { useContext } from 'react'
import { CreateShoppingContex } from '../../Context'

function CheckoutSideMenu(){
    const context = useContext(CreateShoppingContex)
  
return(
    <aside 
        className={`${context.checkoutSideMenu ? 'translate-x-0' : 'translate-x-full'} fixed top-[80px] right-0 w-[300px] h-[calc(100vh-80px)] flex flex-col border border-gray-200 bg-white shadow-lg rounded-lg         transition-transform duration-300 ease-in-out z-10`}
    >
        <div className="flex justify-between items-center p-5 border-b border-gray-300">
            <h2 className="font-medium text-xl bg-gradient-to-r from-[#071952] to-[#088395] bg-clip-text text-transparent">
                My Order
            </h2>
            <div 
                onClick={() => context.toggleCardBuy(null)} 
                className="cursor-pointer hover:rotate-180 transform transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500 hover:text-gray-800">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
    </aside>
)
}

export { CheckoutSideMenu }