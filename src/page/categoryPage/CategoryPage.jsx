import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../components/slideProducts/Product';
import './category.css'
import PageTransition from '../../components/PageTransition';
const CategoryPage = () => {
    const {category} = useParams()
    console.log(category);

    const [categoryProducts , setCategoryProducts ] = useState([])

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
        .then((res) => res.json())
        .then((data) => {
            setCategoryProducts(data.products)
        })
    },[category])
    console.log(categoryProducts);
    
    
  return (
    <PageTransition key={category}>
        <div className="category-products">
            <div className="container">
            <div className="top-slide">
                    <h2>{category}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, facilis!</p>
                </div>

                <div className="products">
                    {categoryProducts.map((item , index) => (
                        <Product item={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
        </PageTransition>
  )
}

export default CategoryPage
