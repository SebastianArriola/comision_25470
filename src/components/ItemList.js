import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
  return (
    <div className="container-items container">

        {products.map((products)=>{

            return <Item key={products.id} products={products}/>

        })}

    </div>
  )
}

export default ItemList