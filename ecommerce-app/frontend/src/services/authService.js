import {axiosInstance} from "../api/axios"

export const login = async(data)=>{

    const response = await axiosInstance.post("/auth/login", data);
    return response.data;
};


export const register = async(data)=>{

    const response = await axiosInstance.post("/auth/register", data);
    return response.data;
};

export const logout = async()=>{

    const response = await axiosInstance.post("/auth/logout", data);
    return response.data;
};

export const profile = async()=>{

    const response = await axiosInstance.get("/auth/profile", data);
    return response.data;
};


