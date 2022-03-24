import Navbar from "../Home/Navbar"
import img from "../../public/img/main.jpg"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { removeCart } from "../../actions/actions"
import { FaChevronRight } from "react-icons/fa"

const Cart = () => {

    const products = useSelector(state => state.product)
    const carts = useSelector(state => state.cart.id)
    const colors = useSelector(state => state.color)
    const sizes = useSelector(state => state.size)
    const subCategories = useSelector(state => state.subCategory)

    const [number, setNumber] = useState(1)

    const handleNumberChange = (e) => {
        e.persist()
        if (e.target.value < 1) {
            setNumber(1)
        }else{
            setNumber(e.target.value)
        }
    }

    const dispatch = useDispatch()
    
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
                                <div className="my-8">
                                    <div className="bg-white shadow-lg rounded flex flex-col sm:flex-row justify-between">
                                        <img src={img} alt="item" className="h-48 sm:w-4/12"/>
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
                                        <div className="flex flex-row my-4 sm:mt-12 w-11/12 m-auto justify-between">
                                            <p className="sm:text-lg md:text-xl mx-2">Quatity:</p>
                                            <input type="number" name="quantity" value={number} onChange={handleNumberChange} className="px-2 border border-gray-300 outline-none w-10/12" placeholder="1"/>
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
                                            <th>Item</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>SubTotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        { products.length > 0 ?
                                            products.map(product => (
                                                carts.includes(product.id) ?
                                            <tr className="my-4">
                                            <td className="text-center truncate">{product.name}</td>
                                            <td className="text-center">Malcolm Lockyer</td>
                                            <td className="text-center">{product.price}</td>
                                            <td className="text-center">{product.price * number}</td>
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