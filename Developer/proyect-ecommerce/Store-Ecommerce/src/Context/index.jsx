import { createContext, useState } from 'react';

export const CreateShoppingContex = createContext()

export const CreateShoppingProvider = ({ children }) => {
    const [count, setCount] = useState(0)

    return (
        <CreateShoppingContex.Provider value={{
            count,
            setCount
        }}>
            {children}
        </CreateShoppingContex.Provider>
    )
}