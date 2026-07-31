import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { setLoading, setUser } from '../../redux/slices/AuthSlice';
import { profile } from '../../services/authService';

const AuthInitializer = ({ children }) => {

    const dispatch = useDispatch();

    const [initialized, setInitialized] = useState(false)

    useEffect(() => {
        const checkAuthentication =async ()=>{
            try {
                dispatch(setLoading(true))

                const reponse = await profile();
                dispatch(setUser(response.user))
            } catch (error) {
                // user is not logged in
                dispatch(setUser(null))

            }finally{
                dispatch(setLoading(false))
                setInitialized(true)
            }
        }
        checkAuthentication()
    }, [dispatch])

    if(!initialized){
        return <h2>Loading...</h2>
    }
    return children

    return (
        <div>

        </div>
    )
}

export default AuthInitializer