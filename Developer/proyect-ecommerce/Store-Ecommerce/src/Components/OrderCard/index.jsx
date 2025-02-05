import { useContext } from 'react'
import { CreateShoppingContex } from '../../Context'

function OrderCard(props) {

    const context = useContext(CreateShoppingContex)

    const { id, title, imageUrl, price, handleDelete } = props

    const deleteCounter = (id) => {
        handleDelete(id)
        context.setCount(context.count - 1)

    }


    return(
        <>
            <div className="flex justify-between w-[calc(100vw - 8px)] items-center mb-4 p-2 bg-gray-100 rounded-lg hover:shadow-md transition-all duration-300 gap-3">
                <div className="flex items-center gap-3">
                    <figure className="w-16 h-16">
                        <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                    </figure>
                    <p className="text-sm font-medium text-gray-800">
                        {title}
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <p className="text-md font-bold text-gray-900">
                        ${price}
                    </p>
                    {handleDelete && (
                        <div 
                            className="bg-gray-300 p-1 rounded-full cursor-pointer hover:bg-gray-400 transform transition-transform duration-300"
                            onClick= {() => deleteCounter(id)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                            </svg>
                        </div>)
                    }
                </div>
            </div>
        </>
    )
}

export { OrderCard }