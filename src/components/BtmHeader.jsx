import { FaSignInAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import './header.css'
import { useState } from "react";

import { useEffect  } from 'react'
import { MdMenu } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const BtmHeader = () => {


const [isCategoryOpen , setIsCategoryOpen] = useState(false)
const location = useLocation()
const [category , setCategory] = useState([])

useEffect(() => {setIsCategoryOpen(false)},[location])


const navlinks = [
  {title:'Home' , link:"/"},
  {title:'About' , link:"/about"},
  {title:'Accessories' , link:"/accessories"},
  {title:'Blog' , link:"/blog"},
  {title:'Contact' , link:"/contact"},
]




 
useEffect(() => {
  fetch('https://dummyjson.com/products/categories')
  .then(res => res.json())
  .then((data) => setCategory(data));
  
},[])
console.log(category);

  return (
    <div className="btm-header">
      <div className="container">
        
        <div className="nav">
          <div className="category-nav">
            <div className="category-btn" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
                <MdMenu />
                <p>Browse Category</p>
                <MdArrowDropDown />
            </div>
            <div className={`category-nav-list ${isCategoryOpen ? "active" : ""} `}>
              {category.map((category) => (
                <Link to={`category/${category.slug}`}>{category.name}</Link>
              ))}
            </div>
          </div>
          
        </div>
        <div className="nav-links">
           {navlinks.map((navLinks) =>(
            <li className={location.pathname === navLinks.link ? "active" : ""}><Link to={navLinks.link}>{navLinks.title}</Link></li>
            
           ))}
        </div>
        <div className="sign-regs-icon">
          <Link to="/"><FaSignInAlt /></Link>
          <Link to="/"><FaUserPlus /></Link>
        </div>
      </div>
    </div>
  )
}

export default BtmHeader
 