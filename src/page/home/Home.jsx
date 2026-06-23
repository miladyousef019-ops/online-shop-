import React from 'react'
import { useEffect, useState } from 'react'
import HeroSlider from '../../components/HeroSlider'
import './home.css'
import SlideProducts from '../../components/slideProducts/SlideProducts'
import PageTransition from '../../components/PageTransition'

const categories = [
  "smartphones",
  "mobile-accessories",
  "sports-accessories",
  "sunglasses",
  "laptops",
  "tablets",

]
              

const Home = () => {
const [products , setProducts] = useState({})

const [loading ,setLoading] = useState(true)
useEffect(() => {
  const fetchProduct  =  async () => {
    try{
      const results =  await Promise.all(
        categories.map(async(category)=>{
          const res = await fetch(`https://dummyjson.com/products/category/${category}`)
          const data = await res.json()
          return { [category] : data.products}
        })
      )
    
    const productsData =  Object.assign({}, ...results)
setProducts(productsData)

    }catch(error){
      console.error("error fetching" , error);
      
    }
    finally{
      setLoading(false)
    }
  }
fetchProduct()

},[])


  return (
    <PageTransition>
      <div>
      <HeroSlider />
      
      {loading ? (<p>loading</p>) : (

        categories.map((category) => (
        <SlideProducts title={category.replace("-" , " ")} data={products[category]} key={category} />
      ))
      )}

      
      </div>
    </PageTransition>
    
  )
}

export default Home
