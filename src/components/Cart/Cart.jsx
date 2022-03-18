import Navbar from "../Home/Navbar"
import img from "../../public/img/main.jpg"

const Cart = () => {
    return(
        <div className="bg-gray-200 min-h-screen">
            <Navbar />
            <div className="py-4">
                <div className="my-4 w-11/12 m-auto">
                    <p className="text-4xl">Your Shopping Cart</p>
                    <hr />
                </div>
                <div className="flex flex-col lg:flex-row justify-content justify-between w-12/12 sm:w-5/12 lg:w-8/12 mx-6 bg-white py-2 px-2 shadow">
                    <div className="flex flex-col">
                        <p className="text-xl my-2">Item</p>
                        <img src={img} alt="item" className="h-48 w-full lg:w-7/12"/>
                    </div>
                    <div className="flex flex-col w-full lg:w-3/12 mt-2 sm:mt-10">
                        <p className="sm:text-lg md:text-2xl font-bold">Product Name</p>
                        <div className="grid grid-cols-2">
                            <p className="sm:text-lg md:text-xl">Style:</p>
                            <p className="sm:text-lg md:text-xl">00010000</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="sm:text-lg md:text-xl">Color:</p>
                            <p className="sm:text-lg md:text-xl">dark-blue</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="sm:text-lg md:text-xl">Size:</p>
                            <p className="sm:text-lg md:text-xl">64-mb</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full sm:w-3/12 mb-2 sm:mt-10">
                        <p className="sm:text-lg md:text-2xl font-bold">Price</p>
                        <div className="grid grid-cols-2 gap-4">
                            <p className="sm:text-lg md:text-xl">Quatity:</p>
                            <p className="sm:text-lg md:text-xl mx-6">00010000</p>
                        </div>
                        <div className="grid grid-cols-2 justify-between">
                            <p className="sm:text-lg md:text-xl">Price:</p>
                            <p className="sm:text-lg md:text-xl mx-8">00010000</p>
                        </div>
                        <div className="grid grid-cols-2 justify-between">
                            <p className="sm:text-lg md:text-xl">Total:</p>
                            <p className="sm:text-lg md:text-xl mx-8">00010000</p>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Cart