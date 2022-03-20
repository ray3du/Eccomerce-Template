import { useState } from 'react'
import { FaAlignJustify, FaAngleDoubleLeft, FaArrowDown, FaHeart, FaSearch, FaShoppingCart, FaStopCircle, FaUserCircle, FaUserPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import WalletConnect from './WalletCollect'

const Navbar = () => {

    const [dropdown, setDropdown] = useState(false)
    const [searchBar, setSearchBar] = useState(false)
    const [sideBar, setSideBar] = useState(false)

    const count = useSelector(state => state.cart.count)
    const wishCount = useSelector(state => state.wishList.count)
    const categories = useSelector(state => state.category)

    return (
        <div>
            <div className='bg-white flex flex-col'>
                <div className="py-4 px-4 flex flex-row justify-content items-center justify-between shadow-md">
                    <Link to='/'><p className="text-lg sm:text-4xl font-medium">Ecommerce</p></Link>
                    <div className='flex flex-row justify-between items-center'>
                        {!sideBar ?
                            <FaAlignJustify className='hover:cursor-pointer hover:opacity-75 text-black mx-2' onClick={() => { setSideBar(!sideBar); setSearchBar(searchBar ? false: searchBar) }} />
                            : null
                        }
                        <div className="relative">
                            <Link to='/wishlist'><FaHeart className='hover:cursor-pointer hover:opacity-75 text-black mx-2' /></Link>
                            <p className='absolute bottom-0 right-0 text-red-500 text-sm font-semibold'>{wishCount}</p>
                        </div>
                        <div className='relative'>
                            <Link to='/cart'><FaShoppingCart className='hover:cursor-pointer hover:opacity-75 text-black mx-2' /></Link>
                            <p className='absolute bottom-0 right-0 text-red-500 text-sm font-semibold'>{count}</p>
                        </div>
                        {!searchBar ?
                            <FaSearch className='hover:cursor-pointer hover:opacity-75 text-black mx-2' onClick={() => setSearchBar(!searchBar)} />
                            :
                            <FaStopCircle className='hover:cursor-pointer hover:opacity-75 text-black mx-2' onClick={() => setSearchBar(!searchBar)} />
                        }
                        <WalletConnect />
                    </div>
                </div>
                <div className={!searchBar ? 'hidden' : 'py-2 bg-gray-200'}>
                    <div className='flex flex-row justify-content items-center w-11/12 m-auto'>
                        <button onClick={() => setDropdown(!dropdown)} id="dropdownButton" data-bs-toggle="dropdown" data-dropdown-toggle="dropdown" className="dropdown-toggle px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out flex items-center whitespace-nowrap" type="button" aria-expanded="false">Categories <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path
                            fill="currentColor"
                            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                        ></path></svg>
                        </button>
                        <input type="text" name="" id="" className='w-full px-1 py-2.5 mx-1 rounded outline-none bg-slate-300 text-gray-700 font-medium text-sm' placeholder='Search for a prroduct ..' />
                    </div>
                    <div id="dropdown" className={!dropdown ? "hidden" : "w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700"}>
                        <ul className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 ml-2 bg-clip-padding border-none" aria-labelledby="dropdownButton">
                            {
                                categories.map(category => (
                                    <li>
                                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">{category.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className={!sideBar ? 'hidden' : 'z-50 absolute min-h-screen shadow-lg w-10/12 bg-white border border-gray-200'}>
                <div className='flex flex-row justify-content divide-x items-center justify-between w-10/12 m-auto'>
                    <div className='flex flex-row justify-content items-center justify-between py-4'>
                        <FaUserCircle className='mx-2' />
                        <p className='hover:cursor-pointer hover:opacity-50'>Login</p>
                    </div>
                    <div className='flex flex-row justify-content items-center'>
                        <FaUserPlus className='mx-2' />
                        <p className='hover:cursor-pointer hover:opacity-50'>Register</p>
                    </div>
                    <div>
                        <FaAngleDoubleLeft className='ml-2 hover:cursor-pointer hover:opacity-50' onClick={() => setSideBar(!sideBar)} />
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}

export default Navbar