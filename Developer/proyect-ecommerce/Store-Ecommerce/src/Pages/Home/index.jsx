import { useState, useEffect } from 'react'
import { Card } from '../../Components/Card'
import { ProductDescription } from '../../Components/ProductDescription'

function Home() {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setProduct(data))
  },[])

    return (
      <>
        <div className='grid gap-3 grid-cols-4 w-full max-w-screen-lg'>
          {
            product?.map(item => (
               <Card key={item.id} data={item}/>
            ))
          }
        </div>
        <ProductDescription/>
      </>
    )
  }
  
  export { Home }
  