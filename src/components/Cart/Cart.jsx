import Navbar from "../Home/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { addCart, addColor, addImages, addQuantity, addSize, addSubCategory, productAction, removeCart, subQuantity } from "../../actions/actions"
import { FaChevronRight } from "react-icons/fa"

const Cart = () => {

    const products = useSelector(state => state.product)
    const carts = useSelector(state => state.cart.id)
    const colors = useSelector(state => state.color)
    const sizes = useSelector(state => state.size)
    const subCategories = useSelector(state => state.subCategory)
    const images = useSelector(state => state.images)

    const [number, setNumber] = useState({
        id: "",
        quantity: 1
    })

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
        if (checkLocalStorage("carts")) {
            if (checkUndefined(carts)) {
                const cart = JSON.parse(localStorage.getItem("carts"))
                cart.map(item => (
                    dispatch(addCart(item))
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
    
    useEffect(() => {
        handleLocalStorage()
    }, [dispatch])

    return(
        <div className="bg-gray-200 min-h-screen">
            <Navbar />
            <div className="py-4">
                <div className="my-4 w-11/12 m-auto">
                    <p className="text-4xl border-b border-gray-500 py-2">Your Shopping Cart</p>
                    <hr />
                </div>
                <div className="flex flex-col lg:flex-row w-[92%] m-auto justify-between">
                    <div className="flex flex-col w-full lg:w-6/12">
                        {
                            products.length > 0 ?
                            products.map(product => (
                                carts.includes(product.id) ?
                                <div className="my-4" key={product.id}>
                                    <div className="bg-white shadow-lg rounded flex flex-col sm:flex-row justify-between">
                                        {
                                            images.map(image => ( 
                                                image.product == product.id ?
                                                    <img src={image.path} alt="item" className="h-48 sm:w-4/12 object-contain"/>
                                                : null
                                            ))
                                        }
                                        <div className="flex flex-col">
                                            <p className="font-bold mx-4 text-lg my-2">Product</p>
                                            <p className="font-semibold text-gray-500 mx-4 text-lg">{product.name}</p>
                                            <div className="flex flex-row justify-between">
                                                <p className="mx-4 font-bold">Price:</p>
                                                <p className="mx-4">Ksh {product.price}</p>
                                            </div>
                                            <div className="flex flex-row justify-between">
                                                <p className="mx-4 font-bold">Type:</p>
                                                {
                                                subCategories.map(subCategory => ( 
                                                    subCategory.id == product.subcategory ?
                                                    <p className="mx-4" key={subCategory.id}>{subCategory.name}</p>
                                                    : null
                                                ))
                                                }
                                            </div>
                                            <div className="flex flex-row justify-between">
                                                <p className="mx-4 font-bold">Color:</p>
                                                {
                                                colors.map(color => ( 
                                                    color.id == product.color ?
                                                    <p className="mx-4" key={color.id}>{color.color}</p>
                                                    : null
                                                ))
                                                }
                                            </div>
                                            <div className="flex flex-row justify-between">
                                                <p className="mx-4 font-bold">Size:</p>
                                                {
                                                sizes.map(size => ( 
                                                    size.id == product.size ?
                                                    <p className="mx-4" key={size.id}>{size.size}</p>
                                                    : null
                                                ))
                                                }
                                            </div>
                                        </div>
                                        <div>
                                        <div className="flex flex-row mx-3 md:mx-0 my-4 sm:mt-12 w-4/12 md:w-11/12 md:m-auto justify-between">
                                            <p className="sm:text-lg md:text-xl mx-2">Quatity:</p>
                                            {/* <input type="number" name="quantity" value={number.quantity} onChange={addQuantity(`${product.id}`)} className="px-2 border border-gray-300 outline-none w-10/12" placeholder="1"/> */}
                                            <div className="flex flex-row w-full justify-start items-center mr-4 bg-gray-100 px-2">
                                                <button className="mr-2 pr-2 hover:opacity-75 text-lg font-bold">-</button>
                                                <p className="bg-white px-3 border-r border-l border-gray-400">2</p>
                                                <button className="ml-2 pl-2 hover:opacity-75 text-lg font-bold" onClick={() => dispatch(addQuantity(`${product.id}`))}>+</button>
                                            </div>
                                        </div>
                                        <div className="flex flex-row w-11/12 m-auto justify-between">
                                            <p className="sm:text-lg md:text-xl mx-2">Total:</p>
                                            <p className="mx-8">{product.price * number}</p>
                                        </div>
                                        <div className="w-11/12 m-auto">
                                            <button className="bg-red-500 rounded text-white px-4 my-4 mx-2 hover:bg-red-600" onClick={ () => dispatch(removeCart(`${product.id}`)) }>Remove</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                : null
                            )) :
                            <p className="w-[92%] m-auto text-xl text-gray-600">Nothing to show!</p>
                        }
                    </div>
                    {/* Order summarry */}
                    <div className="bg-white min-h-48 h-[80%] my-4 lg:my-8 shadow-lg rounded w-full lg:w-5/12">
                        <div className="px-4 py-4">
                            <p className="text-center border-b border-gray-300 pb-1 font-semibold">Order summary</p>
                                <div>
                                    <table className="table-fixed w-11/12 m-auto my-4">
                                        <thead className="bg-slate-100 px-6">
                                            <tr>
                                            <th className="text-start">Item</th>
                                            <th className="text-start">Quantity</th>
                                            <th className="text-start">Price</th>
                                            <th className="text-start">SubTotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        { products.length > 0 ?
                                            products.map(product => (
                                                carts.includes(product.id) ?
                                            <tr className="my-4">
                                            <td className="text-start truncate">{product.name}</td>
                                            <td className="text-start">Malcolm Lockyer</td>
                                            <td className="text-start">{product.price}</td>
                                            <td className="text-start">{product.price * number}</td>
                                            </tr>
                                            : null
                                            )) : null
                                        }
                                        </tbody>
                                    </table>
                                </div>
                                
                            {
                            carts.length > 0 ?
                            <div className="w-11/12 m-auto bottom-0">
                                <button className="bg-slate-800 font-bold rounded text-white py-2 px-6 my-2 shadow-xl hover:bg-slate-600 flex flex-row items-center justify-center" onClick={ () => dispatch(removeCart(`${product.id}`)) }>CHECKOUT <FaChevronRight className="ml-2" /> </button>
                            </div>
                            : <p className="w-[92%] m-auto text-lg">Nothing to see here!</p>
                        }
                        </div>
                    </div>
                    {/* End order summary */}
                </div>
            </div>            
        </div>
    )
}

export default Cart