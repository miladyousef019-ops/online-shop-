import React, { useContext } from 'react'
import './header.css'
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import SearchBox from './SearchBox';
import logo from './unnamed.png'
import { Link } from 'react-router-dom';
import { CartContext } from './context/CartContext';
const TopHeader = () => {

  const {cartItems , favorites } = useContext(CartContext) 

  return (
    <div className="top-header">
      <div className="container">
        <Link className='logo' to="/"><img src={logo} alt="logo" /></Link>
          <SearchBox />
        <div className="header-icons">
          
          <div className="icon ">
            <Link to='/favorites'>
              <CiHeart /> 
              <span className='count'>{favorites.length}</span> 
            </Link>            
          </div>
          <div className="icon">
            <Link to='/cart'>
              <MdOutlineShoppingCart />
              <span className='count'>{cartItems.length}</span>
            </Link>
          </div>
        </div>
      </div>
     </div>
  )
}

export default TopHeader
