import _ from "lodash"
import { FaCheck, FaEthereum, FaHeart, FaPlane } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { addCart, addWishList } from "../../actions/actions"
import img from '../../public/img/main.jpg'

const Latest = () => {

    const products = useSelector(state => state.product)
    const cartId = useSelector(state => state.cart.id)
    const wishId = useSelector(state => state.wishList.id)

    const dispatch = useDispatch()

    const addToWhishList = (id) => {
        console.log(wishId.includes(id))
        if(wishId.length > 0){
            if (!wishId.includes(id)) {
                dispatch(addWishList(id))   
            }
        }else{
            dispatch(addWishList(id))
        }
    }

    return (
        <div className="pb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {   
                    products.length > 0 ? products.map((product, i) => (
                        <div key={product.id} className="my-2 border border-gray-200 shadow-lg rounded bg-white relative">
                            <img src={img} alt="card-img" className="w-full h-48"/>
                            <p className="mx-2 my-2 text-2xl text-gray-700 font-bold">{product.name}</p>
                            <div className="flex flex-row items-center my-2">
                                <p className="mx-2 text-lg text-gray-700 font-bold">Price:</p>
                                <p className="mx-2 text-lg text-gray-700">Ksh</p>
                                <p className="mx-2 text-lg text-gray-700">{product.price}</p>
                                <FaEthereum className="mx-2 text-lg sm:text-2xl text-gray-700"/>
                                <p className="mx-2 text-lg sm:text-2xl text-gray-700">(0.001) ETH</p>
                            </div>
                            {
                                product.shipment == 1 ?
                                <div className="flex flex-row items-center my-2">
                                    <FaPlane className="mx-2"/>
                                    <p className="mx-2">Shipped</p>
                                </div> :
                                <div className="flex flex-row items-center my-2">
                                    <FaPlane className="mx-2 text-white"/>
                                    <p className="mx-2 text-white">Shipped</p>
                                </div> 
                            }
                            <div className="flex justify-center">
                                <button disabled={cartId.includes(product.id) ? true: false} onClick={() => dispatch(addCart(`${product.id}`))} className={cartId.includes(product.id) ? "bg-slate-300 py-2 w-11/12 border border border-slate-200 rounded mb-4 font-bold": "py-2 w-11/12 border border border-slate-200 rounded mb-4 font-bold hover:bg-slate-100"}>{cartId.includes(product.id) ? <span className="flex flex-row justify-center items-center">ADDED <FaCheck className="mx-3 text-sky-600"/></span> : 'ADD TO CART'}</button>
                            </div>
                            <div className="absolute right-4 top-2">
                                <button disabled={wishId.includes(product.id) ? true: false}><FaHeart onClick={() => addToWhishList(`${product.id}`)} className={wishId.includes(product.id) ? "text-3xl text-yellow-300 hover:cursor-pointer hover:text-yellow-400": "text-3xl text-white hover:cursor-pointer hover:text-gray-100"} /></button>
                            </div>
                        </div>
                    ))
                    : 
                    <div className="w-full m-auto">
                        <div className="loaderMain m-auto my-8"></div>
                        <p className="text-center">Loading ... Please wait!</p>
                    </div>
                }
            </div> 
        </div>
    )
}

export default Latest