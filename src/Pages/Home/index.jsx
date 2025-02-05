import { Card } from '../../Components/Card'
import { useContext, useEffect } from 'react'
import { CreateShoppingContex } from '../../Context'
import { ProductDescription } from '../../Components/ProductDescription'

function Home() {
  const context = useContext(CreateShoppingContex)

  const deleteTextInput = () => {
    context.setinputProduct("")
    context.setfilterProduct("")
  }

  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  useEffect(() => {
    if (index) {
      const filterCategory = context.product?.filter(
        product => product.category.name.toLowerCase() === index.toLowerCase()
      );
  
      const areArraysEqual = (arr1, arr2) => {
        if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
        if (arr1.length !== arr2.length) return false;
        return arr1.every((item, index) => item === arr2[index]);
      };
  
      if (!areArraysEqual(filterCategory, context.filterByCategory)) {
        context.setFilterByCategory(filterCategory);
      }
    } else if (index === ""){
      context.setFilterByCategory(context.product);
    }
  }, [index, context.product]);
  
  const renderView = () => (
    Array.isArray(context.filterProduct) ? (
      context.filterProduct.length > 0 ? (
        context.filterProduct.map(item => (
          <Card key={item.id} data={item} />
        ))
      ) : (
      <div className="no-products animate-fadeInScale">
        <p className="text-lg font-medium text-[#071952]">No products found.</p>
      </div>
      )
    ) : (
      context.product?.map(item => (
        <Card key={item.id} data={item} />
      ))
    )
  )

  return (
    <>
      <div className='mb-3 z-1'>
        <h1 className='font-medium text-xl bg-gradient-to-r from-[#071952] to-[#088395] bg-clip-text text-transparent z-1'>Our Products Online</h1>
      </div>
      
      <div className='flex justify-between items-center w-full max-w-[340px] mb-3 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all shadow-sm text-gray-700 placeholder-gray-400 z-1'>
        <input 
          type="text" 
          placeholder="Search for orders"
          className="focus:outline-none ml-3 w-4/5 bg-zinc-50"
          value={context.inputProduct}
          onChange={(e) => context.setinputProduct(e.target.value)}
        />
        <div 
          className='cursor-pointer hover:w-105 mr-2 z-1'
          onClick={deleteTextInput}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="size-6">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" 
            />
          </svg>
        </div>
      </div>

      <div className='grid gap-3 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg z-1'>
        {renderView()}
      </div>
      <ProductDescription/>
    </>
  )
}
  
export { Home }
