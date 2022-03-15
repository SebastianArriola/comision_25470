import React, { useEffect, useState } from 'react'

import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    const initialProduct = {
      id: 1,
      title: "Fender Stratocaster",
      desc: "Its a guitar!",
      price: 450,
      pictureUrl: "https://i.pinimg.com/564x/5c/9f/71/5c9f71b2e196ccf71e72eb88b9f75be8.jpg"
    }
    
      
    const getItem = () =>{

        const promesa = new Promise((res,rej)=>{
  
            setTimeout(() => {
              res(initialProduct)
            }, 2000);
    
        })
    
        promesa.then((resp)=>{
    
          setProduct(initialProduct);
    
        })
        .catch((rej)=>{
    
          console.log('error')
    
        })

        return promesa;

    }

    useEffect(() => {
        getItem()
    },[])

  return (
    <>
        <ItemDetail item={product}/>
    </>
  )
}

export default ItemDetailContainer