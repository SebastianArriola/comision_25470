import { Button } from '@material-ui/core';
import React, { useContext } from 'react'
import { contexto } from './CartContext'

const Cart = () => {

  const contextCart = useContext(contexto);
  const clear = contextCart.clear;
  const cart = contextCart.cart;
  const removeItem = contextCart.removeItem;

  return (
    <div>Cart

      {cart.map(item=>{

          return (<><p key={item.item.id}>{item.item.title}</p>
                  <p>CANTIDAD: {item.quantity}</p>
                  <img src={item.item.pictureUrl}></img>
                  <p>TOTAL: {item.item.price * item.quantity}</p>
                  <Button onClick={()=>{removeItem(item.item.id)}}>remove</Button>
                  </>
                  )

      })}
      
      {cart.length !== 0 && <Button onClick={clear}>LIMPIAR CARRITO</Button>}
      

    </div>
  )
}

export default Cart