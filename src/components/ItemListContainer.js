import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

const ItemListContainer = (props) => {

  const [products, setProducts] = useState([])

  const initialProducts = [{
    id: 1,
    title: "Fender Stratocaster",
    price: 450,
    pictureUrl: "https://i.pinimg.com/564x/5c/9f/71/5c9f71b2e196ccf71e72eb88b9f75be8.jpg"
  },
  {
    id: 2,
    title: "Gibson Les Paul",
    price: 450,
    pictureUrl: "https://cdn.imgbin.com/13/10/13/imgbin-semi-acoustic-guitar-taylor-guitars-electric-guitar-electric-guitar-z4ERsQDNS42qVKhcyAKd0a2y8.jpg"
  },
  {
    id: 3,
    title: "Gibson Guitar",
    price: 800,
    pictureUrl: "https://toppng.com/uploads/preview/black-electric-guitar-11530936970df8gvueqvz.png"
  }  
  ]
    
  useEffect(() => {
    const promesa = new Promise((res,rej)=>{

        setTimeout(() => {
          res(initialProducts)
        }, 2000);

    })

    promesa.then((resp)=>{

      setProducts(initialProducts);

    })
    .catch((rej)=>{

      console.log('error')

    })
  })
  

  return (
    <div>

        <h1>{props.greeting}</h1>
        <ItemList items={products}/>

    </div>
  )
}

export default ItemListContainer