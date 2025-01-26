import { createContext, useState ,useEffect } from 'react';

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
    
    //Product Buy - Add product to cart
    const [order, setOrder] = useState([])

    //Get Products
    const [product, setProduct] = useState(null)

    //Filter Products
    const [filterProduct, setfilterProduct] = useState([])
    
    //Get Products by Input
    const [inputProduct, setinputProduct] = useState("")

    //Get products by category
    const [filterByCategory, setFilterByCategory] = useState([])

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
          .then(response => response.json())
          .then(data => setProduct(data))
      },[])

    //Function to search by products
    const filterProductByTitle = (product, inputProduct) => {
        return product?.filter(products => products.title.toLowerCase().includes(inputProduct.toLowerCase()))
    }

    useEffect(() => {
        if (filterByCategory) {
            setfilterProduct(filterProductByTitle(filterByCategory, inputProduct));
        } else if (inputProduct) {
            setfilterProduct(filterProductByTitle(product, inputProduct));
        } else {
            setfilterProduct(product);
        }
    }, [product, inputProduct, filterByCategory]);


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
            toggleCardBuy,
            order,
            setOrder,
            product,
            setProduct,
            inputProduct,
            setinputProduct,
            filterProduct,
            setfilterProduct,
            filterByCategory,
            setFilterByCategory
        }}>
            {children}
        </CreateShoppingContex.Provider>
    )
}