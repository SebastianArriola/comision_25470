import React from 'react'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

const CardWidget = () => {
  return (
    <div><Link to={"/cart"}><ShoppingCartIcon/></Link></div>
  )
}

export default CardWidget