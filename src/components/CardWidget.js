import React, { useContext } from 'react'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { contexto } from './CartContext';

const CardWidget = () => {

  const contextCart = useContext(contexto);
  const cantTotal = contextCart.cantTotal;

  return (
    
      <Link to={"/cart"} className='cart__link'><ShoppingCartIcon/>{cantTotal !== 0 && <span className="cart__cantTotal">{cantTotal}</span>}</Link>
    
  )
}

export default CardWidget