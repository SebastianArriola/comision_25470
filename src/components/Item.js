import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({products}) => {
  const {product} = products;
  return (
    <div>
        <p>{product.title}</p>
        <Link to={"/item/"+product.id}><img src={product.pictureUrl}></img></Link>
        <p>Price: {product.price}</p>
    </div>
  )
}

export default Item