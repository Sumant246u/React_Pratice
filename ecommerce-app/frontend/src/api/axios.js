import axios from "axios";

export const api = axios.create({
    baseURL:"https://fakestoreapi.com",
    timeout:10000,
    headers:{
        "Content-Type": "application/json"
    }
});

export const axiosInstance = axios.create({
    baseURL: "https://glorious-memory-7v75x6pwp4w43xrx4-5000.app.github.dev/api",
    withCredentials: true,
    headers:{
        "Content-Type": "application/json"
    }
});





