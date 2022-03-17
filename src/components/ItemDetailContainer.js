import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {productsData} from '../data/products.js'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const {id} = useParams();
    const [loading, setLoading] = useState(true)
    const productx = productsData.find(products => products.id === id);
    const getItem = () =>{
        setLoading(true)
        const promesa = new Promise((res,rej)=>{
  
            setTimeout(() => {
              res(productx)
            }, 2000);
    
        })
    
        promesa.then((resp)=>{
    
          setProduct(resp);
    
        })
        .catch((rej)=>{
    
          console.log('error')
    
        })
        .finally(()=>{

          setLoading(false)

        })

        return promesa;

    }

    useEffect(() => {
        getItem()
    },[])

  return (
    <>
        {loading && "Cargando..."}
        <ItemDetail item={product}/>
    </>
  )
}

export default ItemDetailContainer