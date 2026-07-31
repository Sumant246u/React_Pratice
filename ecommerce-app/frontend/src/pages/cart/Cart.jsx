import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from '../../redux/slices/cartSlice';

const Cart = () => {

  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.cartItems)
  // console.log(cartItems);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  if (cartItems.length === 0) {
    return (
      <h2>Your cart it empty</h2>
    )
  }



  return (
    <div className='cart-container'>
      <h2>Shopping Cart</h2>
      {
        cartItems.map(item => (
          <div className='cart-item' key={item.id}>
            <img src={item.image} alt={item.title} />

            <div className='cart-details'>
              <h3>{item.title}</h3>

              <p>${item.price}</p>

              <div className='quantity'>

                <button onClick={() =>dispatch(decreaseQuantity(item.id))}>-</button>

                <span>{item.quantity}</span>

                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              </div>

              <h4>Total: $ {(item.price * item.quantity).toFixed(2)}</h4>
              <button className='remove-btn' onClick={()=>dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
          </div> 
        ))
      }

      <div className='cart-summary'>
        <h2>Grand Total: $ {totalPrice.toFixed(2)}</h2>
        <button className='clear-cart' onClick={()=>dispatch(clearCart())}>Clear Cart</button>
        <button className='checkout-btn'>Proceed to CheckOut</button>
      </div>
    </div>
  )
}

export default Cart