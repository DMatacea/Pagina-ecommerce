import { useContext } from 'react'
import { CreateShoppingContex } from '../../Context'

function ProductDescription(){
    const context = useContext(CreateShoppingContex)
  
return(
    <aside 
        className={`${context.productDescription ? 'translate-x-0' : 'translate-x-full'} fixed top-[80px] right-0 w-[320px] h-[calc(100vh-80px)] flex flex-col justify-between border border-gray-200 bg-white shadow-2xl rounded-lg transition-transform duration-500 ease-in-out z-10`}
    >
        <div className="flex justify-between items-center p-5 border-b border-gray-300">
            <h2 className="font-medium text-xl bg-gradient-to-r from-[#071952] to-[#088395] bg-clip-text text-transparent">
                Description
            </h2>
            <div 
                onClick={() => context.toggleCard(null)} 
                className="cursor-pointer hover:rotate-180 transform transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500 hover:text-gray-800">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
        <div className='overflow-y-auto'>
            <figure className="px-6 mt-4">
                <img 
                    className="w-full h-[200px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300" 
                    src={context.productView.images} 
                    alt={context.productView.title} 
                />
            </figure>
            <div className="flex flex-col p-6 space-y-3">
                <span className="text-lg font-semibold text-[#37B7C3]">${context.productView.price}</span>
                <span className="text-xl font-medium border-b pb-2 border-gray-200">{context.productView.title}</span>
                <span className="text-sm font-light text-gray-600">{context.productView.description}</span>
            </div>
            <div className="p-6 mt-auto">
                <button className="bg-[#088395] text-white text-sm font-medium rounded-s-full w-full py-2 hover:bg-[#071952] transition-colors duration-300">
                    Add to Cart
                </button>
            </div>
        </div>
    </aside>
)
}

export { ProductDescription }