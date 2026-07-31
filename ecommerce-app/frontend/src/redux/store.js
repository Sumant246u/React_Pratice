import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"
import authReducer from "./slices/AuthSlice"

const store = configureStore({

    reducer: {
        cart: cartReducer,
        auth:authReducer,
    }
})

export default store;