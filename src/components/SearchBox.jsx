import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const SearchBox = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const [suggestions, setSuggestions] = useState("")
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (searchTerm.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`)
        }
        setSuggestions([])
    }

    useEffect(() => {

        const fetchSuggestions = async () => {
            if (!searchTerm.trim()) {
                setSuggestions([])
                return;
            }
            try {
                const res = await fetch(
                    `https://dummyjson.com/products/search?q=${searchTerm}`
                )
                const data = await res.json()
                setSuggestions(data.products.slice(0, 5) || [])
            } catch (error) {
                console.error("search error", error);
                setSuggestions([])
            }

        }

        const debounce = setTimeout(() => {
            fetchSuggestions()
        }, 300)
        return () => clearTimeout(debounce)
    }, [searchTerm])
    
    useEffect(() => {
        setSuggestions([])

    },[location])

    return (
        <div className="searchbox-container">
            <form action="" className='search-box' onSubmit={handleSubmit}>
                <input type="text" name='search' id='search' placeholder='search for products' onChange={(e) => setSearchTerm(e.target.value)} autoComplete='off' />
                <button type='sbmit' id='search-logo' ><FaSearch /></button>
            </form>
            {suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((item) => (
                        <Link to={`/product/${item.id}`}><li key={item.id}><img src={item.images[0]} alt="" /> <span>{item.title}</span></li> </Link>
                   
                ))}
                </ul>
            )}

        </div>
    )
}

export default SearchBox
