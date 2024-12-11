import { useContext } from 'react'
import { CreateShoppingContex } from '../../Context'

function Card(data) {

    const context = useContext(CreateShoppingContex)
    return(
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg' >
            <figure className='relative mb-2 w-full h-2/3'>
                <div 
                    className='absolute top-0 right-0 flex justify-center items-center bg-white rounded-full m-2'
                    onClick={()=> context.setCount(context.count + 1)}
                >
                    💟
                </div>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
                <span className='absolute bottom-0 left-0 bg-white/60 lg rounded-full text-black text-xs m-2 px-2 py-0.5'>{data.data.category.name}</span>     
            </figure>
            <span className='text-sm font-light'>{data.data.title}</span>
            <div className='flex justify-between'>
                <span className='text-lg font-medium ml-2'>
                   ${data.data.price}
                </span>
                <button className='bg-amber-500 px-4 py-1 mr-2 rounded-full'>
                    🛒 add to card
                </button>
            </div>
        </div>
    )
}

export { Card }