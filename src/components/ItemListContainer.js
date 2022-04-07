import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { db } from './firebaseConfig.js'
import { getDocs, collection, query, where} from 'firebase/firestore'
import Banner from './Banner'
import Loader from './Loader'

const ItemListContainer = (props) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams();

  const getItems = () => {

    if (id) {

      const q = query(collection(db, "guitars"), where("category", "==", id));
      getDocs(q)
        .then((resp) => {

          setProducts(resp.docs.map(p => ({ product: p.data() })))

        })
        .catch((err) => {

          console.log(err);

        })
        .finally(()=>{

          setLoading(false)

        })


    } else {

      getDocs(collection(db, "guitars"))
      .then((resp)=>{

        setProducts(resp.docs.map(p=>({product: p.data()})))

      })
      .catch((err)=>{

        console.log(err);

      })
      .finally(()=>{

        setLoading(false)

      })

    }

  }

  useEffect(() => {
    getItems();
  },[id])


  return (
    <>
        <Banner />


      <main className='products__container animate__animated animate__fadeIn'>

        <h2 className='products__heading'>nuestros productos</h2>

        {loading && <Loader />}

        <ItemList products={products} />
        
      </main>
      
    </>
  )
}

export default ItemListContainer