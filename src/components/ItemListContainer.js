import React, { useEffect, useState } from 'react'
import { productsData } from '../data/products.js'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

const ItemListContainer = (props) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams();
  const initialProductsFilter = productsData.filter(element => element.category === id)

  const getItems = () => {
    setLoading(true);
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        initialProductsFilter.length === 0 ? res(productsData) : res(initialProductsFilter)
      }, 2000);

    })

    promesa.then((resp) => {

      setProducts(resp)

    })
      .catch((rej) => {

        console.log('error')


      })
      .finally(() => {

        setLoading(false)

      })

      return promesa;

  }

  useEffect(() => {
    getItems();
  }, [id])


  return (
    <div>
      <h1>{props.greeting}</h1>
      {loading && "Cargando..."}
      <ItemList items={products} />

    </div>
  )
}

export default ItemListContainer