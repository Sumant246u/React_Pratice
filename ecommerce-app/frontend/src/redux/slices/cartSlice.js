import {createSlice} from "@reduxjs/toolkit";

// load cart from localStorage
const loadCart = () =>{
    const cart = localStorage.getItem("cart")
    return cart ? JSON.parse(cart) : []
}

// save cart to localStorage
const saveCart = (cartItems)=>{
    localStorage.setItem("cart", JSON.stringify(cartItems))
}

const initialState= {
    cartItems:loadCart(),
}

const CartSlice = createSlice({
    name:"cart",

    initialState,

    reducers: {
        addToCart:(state, action)=>{

            const existingProduct = state.cartItems.find((item)=>item.id === action.payload.id)

            if (existingProduct) {
                existingProduct.quantity+=1
            }else{
                state.cartItems.push({
                    ...action.payload,
                     quantity:1,
                })
            }
            saveCart(state.cartItems);
           
        },

        increaseQuantity:(state,action)=>{
            const item = state.cartItems.find((product)=>product.id === action.payload)

            if(item){
                item.quantity+=1;
            }

            saveCart(state.cartItems)
        },

        decreaseQuantity:(state,action)=>{
            const item = state.cartItems.find((product)=>product.id === action.payload)

            if(item){
                if (item.quantity > 1) {
                    item.quantity -=1;
                }else{
                    state.cartItems = state.cartItems.filter((product)=> product.id !== action.payload)
                }
            }
            saveCart(state.cartItems)
        },
        removeFromCart:(state, action)=>{

            state.cartItems = state.cartItems.filter(item=> item.id !== action.payload)
            saveCart(state.cartItems)
        },

        clearCart:(state)=>{
            state.cartItems =[]
            saveCart(state.cartItems)
        }
    }
})

export const {addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart} = CartSlice.actions;

export default CartSlice.reducer;