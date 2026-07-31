import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import { getproductById } from '../../services/productServices';

const ProductDetails = () => {

    const {id} = useParams();

    const [product,setProducts] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(()=>{
        const fetchProducts = async()=>{
            try {
                setLoading(true)

                const data = await getproductById(id);
                setProducts(data)


            } catch (err) {
                setError('failed to fetch products')
            }finally{
                setLoading(false);
            }
        };
        fetchProducts();

    },[id])

    if (loading) {
        return <h2>Loading.....</h2>
    }
    if (error) {
        return <h2>{error}</h2>
    }

  return (
    <div className='product-details'>
        <div className='image-section'>
            <img src={product.image} alt={product.title} />
        </div>

        <div className='info-section'>
            <h1>{product.title}</h1>
            <h2>${product.price}</h2>

            <p><strong>Category:</strong>{product.category}</p>
            <p>{product.description}</p>
            <p>⭐ {product.rating.rate} ({product.rating.count} Reviews)</p>
            <button>Add To Cart</button>
        </div>
    </div>
  )
}

export default ProductDetails