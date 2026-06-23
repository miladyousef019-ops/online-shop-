import { useState  } from 'react'
import {useParams} from 'react-router-dom'
import BtmHeader from './components/BtmHeader'
import TopHeader from './components/TopHeader'
import SearchProduct from './page/SearchProduct'
import Cart from './page/cart/Cart'
import Favorites from './page/favorites/Favorites'
import Home from './page/home/Home'
import {Route , Router , Routes, } from 'react-router-dom'
import   ProductDetails from './page/productdetails/ProductDetails'
import   CayegoryPage from './page/categoryPage/CategoryPage'
import { Toaster } from 'react-hot-toast'
import ScrollToTop from './components/ScrollToTop'
import { AnimatePresence } from 'framer-motion'


function App() {
   

  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />

      </header>

<Toaster position='bottom-right' toastOptions={{
  style:{
    background:'#e9e9e9',
    borderRedius:'5px',
    padding: '14px'
  }
}} />
<ScrollToTop />
      <AnimatePresence>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/search' element={<SearchProduct />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/category/:category' element={<CayegoryPage />} />
      </Routes>

    </AnimatePresence>
   
      
      

    </>
  )
}

export default App