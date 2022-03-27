import _ from "lodash"
import { FaCheck, FaEthereum, FaPlane } from "react-icons/fa"
import { FiHeart } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { addCart, addWishList } from "../../actions/actions"
import { ProgressBar } from 'react-progressbar-loader-circle'
import { Link } from "react-router-dom"
import { useEffect } from "react"

const Latest = () => {

    const products = useSelector(state => state.product)
    const cartId = useSelector(state => state.cart.id)
    const wishId = useSelector(state => state.wishList.id)
    const images = useSelector(state => state.images)

    const dispatch = useDispatch()

    const addToWhishList = (id) => {
        if(wishId.length > 0){
            if (!wishId.includes(id)) {
                dispatch(addWishList(id))
                localStorage.setItem("wishList", JSON.stringify(wishId))   
            }
        }else{
            dispatch(addWishList(id))
            wishId.push(id)
            localStorage.setItem("wishList", JSON.stringify(wishId))
        }
    }

    const addToCart = (id) => {
        dispatch(addCart(id))
        cartId.push(id)
        localStorage.setItem("carts", JSON.stringify(cartId))
    }

    return (
        <div className="pb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {   
                    products.length > 0 ? products.map((product, i) => (
                        <div key={product.id} className="my-2 border border-gray-200 shadow-lg rounded bg-white relative">
                            {
                                images.map((image) => (
                                    product.id === image.product ?
                                        <Link to={{pathname: `/product/${product.id}`, state: 'Hello' }} key={image.product} ><img src={image.path} alt="card-img" className="w-full h-52 object-contain"/></Link>
                                    : null
                                ))
                            }
                            <p className="mx-3 my-2 text-2xl text-gray-700 font-bold truncate">{product.name}</p>
                            <div className="flex flex-row items-center my-2 ml-2">
                                <p className="mx-2 text-lg text-gray-700 font-bold">Price:</p>
                                <p className="mx-2 text-lg text-gray-700">Ksh</p>
                                <p className="mx-2 text-lg text-gray-700">{product.price}</p>
                                <FaEthereum className="mx-2 text-lg sm:text-2xl text-gray-700"/>
                                <p className="mx-2 text-lg sm:text-2xl text-gray-700">(0.001) ETH</p>
                            </div>
                            {
                                product.shipment == 1 ?
                                <div className="flex flex-row items-center my-2 mx-2">
                                    <FaPlane className="mx-2"/>
                                    <p className="mx-2">Shipped</p>
                                </div> :
                                <div className="flex flex-row items-center my-2">
                                    <FaPlane className="mx-2 text-white"/>
                                    <p className="mx-2 text-white">Shipped</p>
                                </div> 
                            }
                            <div className="flex justify-center">
                                <button disabled={cartId.includes(product.id) ? true: false} onClick={() => addToCart(`${product.id}`)} className={cartId.includes(product.id) ? "bg-slate-300 py-2 w-11/12 border border border-slate-200 rounded mb-4 font-bold": "py-2 w-11/12 border border border-slate-200 rounded mb-4 font-bold hover:bg-slate-100"}>{cartId.includes(product.id) ? <span className="flex flex-row justify-center items-center">ADDED <FaCheck className="mx-3 text-sky-600"/></span> : 'ADD TO CART'}</button>
                            </div>
                            <div className="absolute right-4 top-2">
                                <button disabled={wishId.includes(product.id) ? true: false}><FiHeart onClick={() => addToWhishList(`${product.id}`)} className={wishId.includes(product.id) ? "text-3xl text-red-400 hover:cursor-pointer hover:text-yellow-400": "text-3xl text-gray-400 hover:cursor-pointer hover:text-gray-600"} /></button>
                            </div>
                        </div>
                    ))
                    : 
                    <div className="w-[92%] m-auto">
                        <ProgressBar />
                        <p className="text-center">Loading ... Please wait!</p>
                    </div>
                }
            </div> 
        </div>
    )
}

export default Latest