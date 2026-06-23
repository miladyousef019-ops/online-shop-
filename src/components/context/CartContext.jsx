import React, { createContext, useEffect, useState } from 'react'
export const CartContext = createContext()
export default function CartProvider({children}) {
  // favorites
  const [favorites , setFavorites] = useState(() => {
    const savedFav = localStorage.getItem('favoritesItems')
    return savedFav ? JSON.parse(savedFav) : [];
  })
  const addToFavorites = (item) => {
    setFavorites((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev , item]
    })
  }
  useEffect(() => {
    localStorage.setItem("favoritesItems" , JSON.stringify(favorites))
  },[favorites])
  //cart

  const [cartItems , setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems')
    return savedCart ? JSON.parse(savedCart) : []
  })

  const increaseQuantity = (id) =>{
    setCartItems(prevItems => prevItems.map(item => 
      item.id === id ? {...item , quantity: item.quantity + 1} : item
    ))
  }
  const minusQuantity = (id) =>{
      setCartItems(prevItems => prevItems.map(item => 
      item.id === id && item.quantity > 1 ? {...item , quantity: item.quantity - 1} : item
    ))
  }
  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter( item=> item.id != id))
  }


  const addToCart = (item) => {
    if (!item || !item.id){
      console.error("un devined" , item);
      return;
    }
    setCartItems((prevItems) => {
      const isExist = prevItems.some((cartItem) => cartItem.id === item.id)

      if (isExist) {
        return prevItems;
      }else{
        return [...prevItems, {...item, quantity:1}]
      }
    })
  }

  useEffect(() => {
    localStorage.setItem('cartItems' , JSON.stringify(cartItems))
  },[cartItems])

  const removeFromFavorites = (id) => { 
    setFavorites((prev) => prev.filter((i) => i.id !== id))
  }

  return (
    <CartContext.Provider value={{cartItems , addToCart , increaseQuantity 
    , minusQuantity , removeFromCart , addToFavorites , favorites , removeFromFavorites}}>
      {children}
    </CartContext.Provider>
  )
}                        