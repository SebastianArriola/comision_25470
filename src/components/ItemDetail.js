import React, { useContext } from 'react'
import { contexto } from './CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {

  const contextCart = useContext(contexto);
  const addItem = contextCart.addItem;

  const onAdd = (count) =>{

      addItem(item, count);

  }

  return (
    <div>
        <h1>Detalle producto</h1>
        <img src={item.pictureUrl}></img>
        <p>{item.title}</p>
        <p>{item.desc}</p>
        <p>Price: {item.price}</p>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail