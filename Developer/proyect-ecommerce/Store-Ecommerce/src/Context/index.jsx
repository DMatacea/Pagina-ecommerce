import { createContext, useState } from 'react';

export const CreateShoppingContex = createContext()

export const CreateShoppingProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    
    //Product Details - Show Products
    const [productView, setProductView] = useState({})
    
    //Product Details - Open/Close
    const [productDescription, setProductDescription] = useState(null)
    const toggleCard = (id) => {
        setProductDescription((prevActiveCard) => (prevActiveCard === id ? null : id));
    };

    //Checkout Side Menu - Open/Close
    const [checkoutSideMenu, setCheckoutSideMenu] = useState(null)
    const toggleCardBuy = (id) => {
        setCheckoutSideMenu((prevActiveCard) => (prevActiveCard === id ? null : id));
    };

    //Product Buy - Add product to cart
    const [cartBuy, setCardBuy] = useState([])
    
    return (
        <CreateShoppingContex.Provider value={{
            count,
            setCount,
            toggleCard,
            productDescription,
            productView,
            setProductView,
            cartBuy,
            setCardBuy,
            checkoutSideMenu,
            setCheckoutSideMenu,
            toggleCardBuy
        }}>
            {children}
        </CreateShoppingContex.Provider>
    )
}