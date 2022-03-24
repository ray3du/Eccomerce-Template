import Navbar from "../Home/Navbar"
import img from "../../public/img/main.jpg"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { removeCart } from "../../actions/actions"

const Checkout = () => {

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
                {
                    products.length > 0 ?
                    products.map(product => (
                        carts.includes(product.id) ?
                        <div className="flex flex-col lg:flex-row justify-content justify-between w-12/12 sm:w-5/12 lg:w-8/12 mx-6 bg-white py-2 px-2 my-6 shadow rounded" key={product.id} >
                            <div className="flex flex-col">
                                <p className="text-xl mb-2">Item</p>
                                <img src={img} alt="item" className="h-48 w-full lg:w-7/12"/>
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
                                <p className="sm:text-lg md:text-2xl font-bold">Price</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <p className="sm:text-lg md:text-xl">Quatity:</p>
                                    <input type="number" name="quantity" value={number} onChange={handleNumberChange} className="px-1 border border-gray-300 outline-none w-10/12" placeholder="1"/>
                                </div>
                                <div className="grid grid-cols-2 justify-between">
                                    <p className="sm:text-lg md:text-xl">Price:</p>
                                    <p className="sm:text-lg md:text-xl mx-8">{product.price}</p>
                                </div>
                                <div className="grid grid-cols-2 justify-between">
                                    <p className="sm:text-lg md:text-xl">Total:</p>
                                    <p className="sm:text-lg md:text-xl mx-8">00010000</p>
                                </div>
                                <div>
                                    <button className="bg-red-500 rounded text-white px-4 my-2 hover:bg-red-600" onClick={ () => dispatch(removeCart(`${product.id}`)) }>Remove</button>
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

export default Checkout