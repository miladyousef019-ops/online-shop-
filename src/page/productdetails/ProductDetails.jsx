import React, { useEffect, useState, useContext } from 'react'
import { FaStar, FaCartArrowDown, FaRegHeart, FaHeart, FaShare } from "react-icons/fa6"
import { useNavigate, useParams } from 'react-router-dom';
import './productdetails.css'
import SlideProducts from '../../components/slideProducts/SlideProducts'
import ProductDetailsLoading from './ProductDetailsLoading';
import { CartContext } from '../../components/context/CartContext';
import toast from 'react-hot-toast';
import PageTransition from '../../components/PageTransition';

const ProductDetails = () => {
    // 1. تم إضافة removeFromFavorites هنا
    const { cartItems, addToCart, removeFromCart, addToFavorites, removeFromFavorites, favorites } = useContext(CartContext)
    const { id } = useParams()
    
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [relativeproducts, setRelativeproducts] = useState([])
    const [loadingrelativeproducts, setLoadingrelativeproducts] = useState(true) // تم إصلاح الخطأ الإملائي هنا

    const navigate = useNavigate()

    const handleAddToCart = () => {
        addToCart(product)

        toast.success(
            <div className="toast-wrapper">
                <img src={product.images[0]} alt="" className='toast-img' />
                <div className="toast-content">
                    <strong>{product.title}</strong> added to cart
                    <div>
                        {/* 2. تم إصلاح المسار ليصبح مطلقاً '/cart' */}
                        <button className='btn' onClick={() => navigate('/cart')}> 
                            View Cart
                        </button>
                    </div>
                </div>
            </div>, { duration: 3500 }
        )
    }

    const isInFav = favorites.some(i => i.id === product?.id)
    
    // 3. تم استبدال item بـ product المتوفر في المكون
    const handleAddToFav = () => {
        if (isInFav) {
            removeFromFavorites(product.id)
            toast.error(`${product.title} removed from favorites`)
        } else {
            addToFavorites(product)
            toast.success(`${product.title} added to favorites`)
        }
    }

    const isInCart = cartItems.some(i => i.id === product?.id)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`)
                const data = await res.json()
                setProduct(data)
                setLoading(false)
            } catch (error) {
                console.log('error fetching product', error);
                setLoading(false)
            }
        }
        fetchProduct()
    }, [id])

    useEffect(() => {
        if (!product) return;
        
        setLoadingrelativeproducts(true) // إعادة تشغيل التحميل عند تغيير المنتج
        fetch(`https://dummyjson.com/products/category/${product.category}`)
            .then((res) => res.json())
            .then((data) => {
                setRelativeproducts(data.products)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoadingrelativeproducts(false))
    }, [product?.category])

    if (loading) return <ProductDetailsLoading />
    if (!product) return <p>Product not found</p>

    return (
        <PageTransition key={id}>
            <div>
                <div className="item-details">
                    <div className="container">
                        <div className="imgs-item">
                            <div className="big-img">
                                <img src={product.images[0]} alt="img" />
                            </div>
                            <div className="sm-img">
                                {product.images.map((img, index) => (
                                    <img key={index} src={img} alt='' />
                                ))}
                            </div>
                        </div>
                        
                        <div className="details-item">
                            <h1 className='name'>{product.title}</h1>
                            <div className="stars"></div>
                            
                            <h5>Availability: <span>{product.availabilityStatus}</span></h5>
                            <h5>Brand: <span>{product.brand}</span></h5>
                            <p className="desc">{product.description}</p>
                            <h4 className="hurry"><span>Hurry Up! Only {product.stock} Products left in stock</span></h4>
                            
                            <button className={`btn ${isInCart ? 'in-cart' : ''}`} onClick={handleAddToCart}>
                                {isInCart ? 'Item in cart' : 'Add to cart'} <FaCartArrowDown />
                            </button>
                            
                            <div className="icons">
                              
                                <span onClick={handleAddToFav} style={{ cursor: 'pointer',color: '#fff', background: '#0090f0' , height: '40px' , width : '40px' , borderRadius:'40px'  }}>
                                    {isInFav ? <FaHeart  /> : <FaRegHeart />}
                                </span>
                                <span><FaShare /></span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {loadingrelativeproducts ? (
                    <p>Loading relative products...</p>
                ) : (
                    <SlideProducts title={product.category.replace("-", " ")} data={relativeproducts} key={product.category} />
                )}
            </div>
        </PageTransition>
    )
}

export default ProductDetails