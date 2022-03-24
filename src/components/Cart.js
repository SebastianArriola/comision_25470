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

          return (<><p key={item.id}>{item.title}</p>
                  <p>{item.quantity}</p>
                  <img src={item.pictureUrl}></img>
                  <p>{item.price}</p>
                  <Button onClick={()=>{removeItem(item.id)}}>remove</Button>
                  </>
                  )

      })}
      
      {cart.length !== 0 && <Button onClick={clear}>LIMPIAR CARRITO</Button>}
      

    </div>
  )
}

export default Cart