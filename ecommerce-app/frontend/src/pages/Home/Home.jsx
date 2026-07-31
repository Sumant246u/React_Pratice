import React, { useEffect, useMemo, useState } from 'react'
import { getProducts } from '../../services/productServices'
import './Home.css'
import ProductCard from '../../components/ProductCard/ProductCard';
import Navbar from '../../components/Navbar/Navbar';
import { useOutletContext } from 'react-router-dom';

const Home = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const {search} = useOutletContext();
    


    useEffect(() => {
        const fetchProducts = async () => {
            try {

                setLoading(true);

                const data = await getProducts();
                setProducts(data);

            } catch (err) {
                setError('Failed to fetch products')
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();

    }, [])

    const filterProducts = useMemo(()=>{
        return products.filter((product)=>product.title.toLowerCase().includes(search.toLowerCase()));
    },[products,search])

    

    if(loading){
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }
    return (
        <>

            <div className='product-grid'>
                {filterProducts.map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </>
    )
}

export default Home