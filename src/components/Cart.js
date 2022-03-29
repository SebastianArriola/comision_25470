import { Button } from '@material-ui/core';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { contexto } from './CartContext'

const Cart = () => {

  const contextCart = useContext(contexto);
  const clear = contextCart.clear;
  const cart = contextCart.cart;
  const removeItem = contextCart.removeItem;
  const total = contextCart.total;

  return (
    <div>{cart.length !== 0 ? cart.map(item=>{

      return (<div key={item.item.id}><p>{item.item.title}</p>
              <p>PRECIO: {item.item.price}</p>
              <img src={item.item.pictureUrl}></img>
              <p>CANTIDAD: {item.quantity}</p>
              <p>SUBTOTAL: {item.item.price * item.quantity}</p>
              <Button onClick={()=>{removeItem(item.item)}}>borrar</Button>
              </div>
              )

  }) : <><p>Su carrito esta vacio.</p>
      <Link to="/">Volver al catalogo</Link></>}

      {total !== 0 && <p>TOTAL: {total}</p>}
      
      {cart.length !== 0 && <Button onClick={clear}>LIMPIAR CARRITO</Button>}
      

    </div>
  )
}

export default Cart