import React, { useContext } from 'react'
import './slideproduct.css'
import { FaStar , FaCartArrowDown , FaRegHeart , FaShare, FaCheck } from "react-icons/fa6"
import { FaRegStarHalfStroke} from "react-icons/fa6"
import { Link, useNavigate } from 'react-router-dom'

import pecet from '../../assets/OIP (2).webp'
import { CartContext } from '../context/CartContext'
import toast from 'react-hot-toast'



const Product = ({item}) => {

const navigate = useNavigate()

  const {cartItems , addToCart , addToFavorites , favorites , removeFromFavorites} = useContext(CartContext)

  const isInCart = cartItems.some(i => i.id === item.id)

  const handleAddToCart = () => {
    addToCart(item)
    toast.success(
      <div className="toast-wrapper">
        <img src={item.images[0]} alt="" className='toast-img' />
        <div className="toast-content">
          <strong>{item.title}</strong>
          added to cart
          <div className="">
            <button className='btn' onClick={() => navigate('./cart')}> 
              View Cart
            </button>
          </div>
        </div>
      </div>, {duration: 500}
    )
  }


  
  const isInFav = favorites.some(i => i.id === item.id)


 const handleAddToFav = () => {
  if (isInFav) {
    removeFromFavorites(item.id)
    toast.error(`${item.title} removed from favorite`)

  }else{
    addToFavorites(item)
    toast.success(`${item.title} added to favorite`)

   }
   }



  console.log(cartItems);
  
  return (
    <div className={`product ${isInCart ? 'in-cart' : ''}`}>
      <Link to={`/product/${item.id}`}>
      <span className='status-cart'><FaCheck />in cart</span>
         <div className="img-product">
        <img src={item.images[0]} alt="" />
      </div>
      <p className="name-product">{item.title}</p>
      <div className="stars">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
      </div>
      <p className="price">
        <span>$ {item.price}</span>
      </p>
      </Link>
      <div className="icons">
        <span className='btn-addtocart' onClick={handleAddToCart} ><FaCartArrowDown /></span>
        <span className={`${isInFav ? "in-fav" : ''}`} onClick={handleAddToFav} ><FaRegHeart /></span>
        <span><FaShare /></span>

      </div>
    </div>
  )
}

export default Product
