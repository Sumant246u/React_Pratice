import React from 'react'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';


const ProductCard = ({ product }) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    return (
        <div className='product-card' onClick={()=>navigate(`/product/${product.id}`)}>
            <img src={product.image} alt={product.title} className='product-image' />
            <h3 className="product-title">
                {product.title}
            </h3>

            <p className="product-price">
                ${product.price}
            </p>

            <button onClick={(e)=>{e.stopPropagation(); dispatch(addToCart(product))}}>Add To Cart</button>

        </div>
    )
}

export default ProductCard