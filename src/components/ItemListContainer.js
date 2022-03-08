import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {
  return (
    <div>

        <h1>{props.greeting}</h1>
        <ItemCount/>

    </div>
  )
}

export default ItemListContainer