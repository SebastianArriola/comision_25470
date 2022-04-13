import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {

  return (
    <div className='products__grid'>
      {products.map((products) => {
        return <Item key={products.product.id} products={products} />
      })}
    </div>
  )
}

export default ItemList