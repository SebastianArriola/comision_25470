import { Button } from '@material-ui/core'
import React, { useContext } from 'react'
import { contexto } from './CartContext';

const ItemDetail = ({item, count}) => {

  const contextCart = useContext(contexto);
  const addItem = contextCart.addItem;

  return (
    <div>
        <h1>Detalle producto</h1>
        <img src={item.pictureUrl}></img>
        <p>{item.title}</p>
        <p>{item.desc}</p>
        <p>Price: {item.price}</p>
        <Button onClick={()=>{addItem(item, count)}}>Comprar</Button>
    </div>
  )
}

export default ItemDetail