import React, { useContext } from 'react'
import { CartContext } from '../../components/context/CartContext'
import { FaTrashAlt } from 'react-icons/fa';

import './cart.css'
import PageTransition from '../../components/PageTransition';

const Cart = () => {
  const {cartItems , increaseQuantity , minusQuantity , removeFromCart} =useContext(CartContext)
  console.log(cartItems);
  const total = cartItems.reduce((acc , item) => acc + item.price * item.quantity , 0)
 
  return (
    <PageTransition>
        <div className="checkout">
        <div className="ordersummray">
            <h1>Order Summray</h1>
            <div className="items">
              {cartItems.length === 0 ? (<p>cart is empty</p>)
              :(cartItems.map ((item,index)  => (
                <div className="item-cart" key={item.id}>
                 
                  <div className="img-side">
                   <div className="pecet">
                     <img src={item.images[0]} alt="" />
                   </div>
                  <div className="text">
                    <h3>{item.title}</h3>
                    <hp>${item.price}</hp>
                    <div className="count-control">
                      <button onClick={() => minusQuantity(item.id)}>-</button>
                      <span className='quantity'>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                  </div>
                 </div>  
                  <button className="delate-item" onClick={() => removeFromCart(item.id)}>
                  <FaTrashAlt />
                  </button>
                </div>
                  
                  
                
              )))
            }
            </div>
            <div className="button-summary">
              <div className="shop-table">
                <p>Totale:</p>
                <span className='tatal-checkout'>${total.toFixed(2)}</span>
              </div>
              <div className="button-div">
                <button type='submit'>place order</button>
              </div>
            </div>
        </div>

    </div>
    </PageTransition>
    
  )
}

export default Cart
