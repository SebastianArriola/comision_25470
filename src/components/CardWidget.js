import React, { useContext } from 'react'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { contexto } from './CartContext';

const CardWidget = () => {

  const contextCart = useContext(contexto);
  const cantTotal = contextCart.cantTotal;

  return (
    <div>
      {cantTotal !== 0 && <Link to={"/cart"}><ShoppingCartIcon/>{cantTotal}</Link>}
    </div>
  )
}

export default CardWidget