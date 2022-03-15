import React from 'react'

const ItemDetail = ({item}) => {

    console.log(item);

  return (
    <div>
        <h1>Detalle producto</h1>
        <img src={item.pictureUrl}></img>
        <p>{item.title}</p>
        <p>{item.desc}</p>
        <p>Price: {item.price}</p>
    </div>
  )
}

export default ItemDetail