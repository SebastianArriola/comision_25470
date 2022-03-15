import React from 'react'
import ItemCount from './ItemCount'


const Item = ({item}) => {
  return (
    <div>
        <p>{item.title}</p>
        <img src={item.pictureUrl}></img>
        <p>Price: {item.price}</p>
        <ItemCount/>
    </div>
  )
}

export default Item