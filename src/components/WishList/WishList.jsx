import Navbar from "../Home/Navbar"
import img from "../../public/img/main.jpg"
import { useDispatch, useSelector } from "react-redux"
import { addCart, addWishList, productAction, addImages, addColor, addSize, addSubCategory, removeWishList } from "../../actions/actions"
import { FaCheck } from "react-icons/fa"
import { useEffect } from "react"

const WishList = () => {

    const products = useSelector(state => state.product)
    const wishLists = useSelector(state => state.wishList.id)
    const colors = useSelector(state => state.color)
    const sizes = useSelector(state => state.size)
    const subCategories = useSelector(state => state.subCategory)
    const cartId = useSelector(state => state.cart.id)
    const images = useSelector(state => state.images)

    const dispatch = useDispatch()

    const checkLocalStorage = (item) => {
        return localStorage.getItem(item) !== null
    }

    const checkUndefined = (item) => {
        return item.length === 0 
    }

    const handleLocalStorage = () => {
        if (checkLocalStorage("products")) {
            if (checkUndefined(products)) {
                dispatch(productAction(JSON.parse(localStorage.getItem("products"))))
            }
        }
        if (checkLocalStorage("images")) {
            if (checkUndefined(images)) {
                dispatch(addImages(JSON.parse(localStorage.getItem("images"))))
            }
        }
        if (checkLocalStorage("wishList")) {
            if (checkUndefined(wishLists)) {
                const wishId = JSON.parse(localStorage.getItem("wishList"))
                wishId.map(item => (
                    dispatch(addWishList(item))
                ))
            }
        }
        if (checkLocalStorage("colors")) {
            if (checkUndefined(colors)) {
                dispatch(addColor(JSON.parse(localStorage.getItem("colors"))))
            }
        }
        if (checkLocalStorage("sizes")) {
            if (checkUndefined(sizes)) {
                dispatch(addSize(JSON.parse(localStorage.getItem("sizes"))))
            }
        }
        if (checkLocalStorage("subCategory")) {
            if (checkUndefined(subCategories)) {
                dispatch(addSubCategory(JSON.parse(localStorage.getItem("subCategory"))))
            }
        }
    }

    const removeFromWishList = (id) => {
        dispatch(removeWishList(id))
        if (checkLocalStorage("wishList")) {
            const wishId = JSON.parse(localStorage.getItem("wishList"))
            for (let index = 0; index < wishId.length; index++) {
                if (wishId[index] === id) {
                    wishId.splice(index, id)
                }
            }
            localStorage.removeItem("carts")
            localStorage.setItem("carts", wishId)
        }
    }
    
    useEffect(() => {
        handleLocalStorage()
    }, [dispatch])

    
    return(
        <div className="bg-gray-200 min-h-screen">
            <Navbar />
            <div className="py-4">
                <div className="my-4 w-11/12 m-auto">
                    <p className="text-4xl border-b border-gray-500 py-2">Your Wishlist</p>
                    <hr />
                </div>
                {
                    products.length > 0 ?
                    products.map(product => (
                        wishLists.includes(product.id) ?
                        <div className="flex flex-col lg:flex-row justify-content justify-between w-12/12 sm:w-5/12 lg:w-8/12 mx-6 bg-white py-2 px-2 my-6 shadow rounded" key={product.id} >
                            <div className="flex flex-col">
                                <p className="text-xl mb-2">Item</p>
                                {/* <img src={img} alt="item" className="h-48 w-full lg:w-7/12"/> */}
                                {
                                images.map(image => ( 
                                    image.product === product.id ?
                                        <img src={image.path} alt="item" className="h-48 sm:w-4/12 object-contain"/>
                                    : null
                                ))
                            }
                            </div>
                            <div className="flex flex-col w-full lg:w-3/12 mt-2 sm:mt-10">
                                <p className="sm:text-lg md:text-2xl font-bold">{product.name}</p>
                                <div className="grid grid-cols-2">
                                    <p className="sm:text-lg md:text-xl">Type:</p>
                                    {
                                        subCategories.map(subCategory => ( 
                                            subCategory.id == product.subcategory ?
                                            <p className="sm:text-lg md:text-xl" key={subCategory.id}>{subCategory.name}</p>
                                            : null
                                        ))
                                    }
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className="sm:text-lg md:text-xl">Color:</p>
                                    {
                                        colors.map(color => ( 
                                            color.id == product.color ?
                                            <p className="sm:text-lg md:text-xl" key={color.id}>{color.color}</p>
                                            : null
                                        ))
                                    }
                                </div>
                                <div className="grid grid-cols-2">
                                    <p className="sm:text-lg md:text-xl">Size:</p>
                                    {
                                        sizes.map(size => ( 
                                            size.id == product.size ?
                                            <p className="sm:text-lg md:text-xl" key={size.id}>{size.size}</p>
                                            : null
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col w-full sm:w-3/12 mb-2 sm:mt-10">
                                <div className="grid grid-cols-2 justify-between">
                                    <p className="sm:text-lg md:text-xl">Price:</p>
                                    <p className="sm:text-lg md:text-xl">{product.price}</p>
                                </div>
                                <div>
                                   <div className="flex flex-row">
                                   <button className="bg-red-500 rounded text-white px-4 my-2 hover:bg-red-600" onClick={ () => removeFromWishList(`${product.id}`) }>Remove</button>
                                    <button disabled={cartId.includes(product.id) ? true: false} onClick={() => dispatch(addCart(`${product.id}`))} className={cartId.includes(product.id) ? "rounded text-white px-4 my-2 bg-slate-400 font-bold mx-2": "px-2 bg-sky-500 rounded text-white px-4 my-2 hover:bg-red-600 mx-2"}>{cartId.includes(product.id) ? <span className="flex flex-row justify-center items-center">ADDED <FaCheck className="mx-3"/></span> : 'ADD TO CART'}</button>
                                   </div>
                                </div>
                            </div>
                        </div>
                        : null
                    )) :
                    <p className="w-[92%] m-auto text-xl text-gray-600">Nothing to show!</p>
                }
            </div>            
        </div>
    )
}

export default WishList