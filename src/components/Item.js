import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({item}) => {
  return (
    <div>
        <p>{item.title}</p>
        <Link to={"/item/"+item.id}><img src={item.pictureUrl}></img></Link>
        <p>Price: {item.price}</p>
    </div>
  )
}

export default Item