import React, { useContext } from 'react'
import { CartContext } from '../../components/context/CartContext'
import './favorites.css'
import PageTransition from '../../components/PageTransition'
import Product from '../../components/slideProducts/Product'

const Favorites = () => {
    const {favorites } =useContext(CartContext)
  return (
    <PageTransition>
        <div className="category-products favorites-page">
            <div className="container">
                <div className="top-slide">
                    <h2>your favorites</h2>
                </div>
                {favorites.length === 0 ? (
                  <p>no favorites product</p>
                ) : (
                  <div className="products">
                    {favorites.map(item => (
                      <Product item={item} key={item.id} />

                      
                    ))}
                  </div>
                )}
               
            </div>
        </div>
        </PageTransition>

  )
}

export default Favorites
