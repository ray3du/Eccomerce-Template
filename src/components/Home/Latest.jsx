import _ from "lodash"
import { useEffect } from "react"
import { FaEthereum } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { addCart } from "../../actions/actions"
import img from '../../public/img/main.jpg'

const Latest = () => {

    const products = useSelector(state => state.product)
    const cartId = useSelector(state => state.cart.id)

    const dispatch = useDispatch()

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {   
                    products.length > 0 ? products.map((product, i) => (
                        <div key={product.id} className="my-4 border border-gray-200 shadow-lg rounded bg-white">
                            <img src={img} alt="card-img" className="w-full h-48"/>
                            <p className="mx-2 my-2 text-2xl text-gray-700 font-bold">{product.name}</p>
                            <div className="flex flex-row items-center my-2">
                                <p className="mx-2 text-lg text-gray-700 font-bold">Price:</p>
                                <p className="mx-2 text-lg text-gray-700">Ksh</p>
                                <p className="mx-2 text-lg text-gray-700">{product.price}</p>
                                <FaEthereum className="mx-2 text-lg sm:text-2xl text-gray-700"/>
                                <p className="mx-2 text-lg sm:text-2xl text-gray-700">(0.001) ETH</p>
                            </div>
                            <div className="flex justify-center">
                                {       
                                cartId[i] == `${product.id}` ? 
                                <button onClick={() => dispatch(addCart(`${product.id}`))} className="py-2 w-11/12 border border border-slate-200 rounded mb-4 font-bold bg-slate-100">ADDED</button>
                                : <button onClick={() => dispatch(addCart(`${product.id}`))} className="py-2 w-11/12 border border border-slate-200 rounded mb-4 font-bold hover:bg-slate-100">ADD TO CART</button>                     
                                }
                            </div> 
                        </div>
                    ))
                    : null
                }
            </div>
        </div>
    )
}

export default Latest