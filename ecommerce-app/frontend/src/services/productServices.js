import {api} from "../api/axios"

// Get all products
export const getProducts = async()=>{
    const response = await api.get("/products")
    return response.data;
};

// Get single products
export const getproductById = async(id)=>{
    const response = await api.get(`/products/${id}`)
    return response.data;
}