import React, { useEffect , useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import Product from '../components/slideProducts/Product'
import { h1 } from 'framer-motion/client'
const SearchProduct = () => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const query = new URLSearchParams(useLocation().search).get("query")
    
    
    console.log(results);
    useEffect(() => {
        const FetchReasults = async () => {
            try {
                const res = await fetch(
                    `https://dummyjson.com/products/search?q=${query}`
                )
                const data = await res.json()
                setResults(data.products || [])
            } catch (error) {
                console.error("search error", error);

            } finally {
                setLoading(false)
            }
        }
        if (query) FetchReasults()
    }, [query])




    return (
        <PageTransition key={query}>
            {loading ? (<h1>loading</h1>) : 
            results.length > 0 ? ( 
            <div className="category-products">
                <div className="container">
                <div className="top-slide">
                        <h2>Results for : {query}</h2>
                </div>

                    <div className="products">
                        {results.map((item , index) => (
                            <Product item={item} key={index} />
                        ))}
                    </div>
                </div>
            </div>
            ):(<p className='no-found'>no results found</p>)
            }
        </PageTransition>
    )
}

export default SearchProduct
