import { useState } from 'react'
import { FaAlignJustify, FaAngleDoubleLeft, FaArrowDown, FaSearch, FaShoppingCart, FaStopCircle, FaUserCircle, FaUserPlus } from 'react-icons/fa'

const Navbar = () => {

    const [dropdown, setDropdown] = useState(false)
    const [searchBar, setSearchBar] = useState(false)
    const [sideBar, setSideBar] = useState(false)

    return (
        <div>
            <div className='bg-white flex flex-col'>
                <div className="py-4 px-4 flex flex-row justify-content items-center justify-between shadow-md">
                    <p className="text-2xl">Ecommerce</p>
                    <div className='flex flex-row justify-between'>
                        { !sideBar ?
                            <FaAlignJustify className='hover:cursor-pointer hover:opacity-75 text-black mx-2' onClick={() => setSideBar(!sideBar)}/>
                            : null
                        }
                        <FaShoppingCart className='hover:cursor-pointer hover:opacity-75 text-black mx-2'/>
                        { !searchBar ? 
                            <FaSearch className='hover:cursor-pointer hover:opacity-75 text-black mx-2' onClick={() => setSearchBar(!searchBar)}/>
                            :
                            <FaStopCircle className='hover:cursor-pointer hover:opacity-75 text-black mx-2' onClick={() => setSearchBar(!searchBar)}/>
                        }
                    </div>
                </div>
                <div className={!searchBar ? 'hidden' : 'py-2 bg-gray-200'}>
                    <div className='flex flex-row justify-content items-center w-11/12 m-auto'>
                        <button onClick={() => setDropdown(!dropdown)} id="dropdownButton" data-dropdown-toggle="dropdown" className="text-black bg-slate-400 hover:bg-slate-500 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Categories <FaArrowDown/></button>
                        <input type="text" name="" id="" className='w-full px-2 py-2 rounded outline-none bg-slate-300 border border-gray-200' placeholder='Search for a prroduct ..'/>
                    </div>
                    <div id="dropdown" className={!dropdown ? "hidden" : "z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700"}>
                        <ul className="py-1" aria-labelledby="dropdownButton">
                        <li>
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={!sideBar ? 'hidden' : 'z-50 absolute h-[90%] shadow-lg w-10/12 bg-white border border-gray-200'}>
                <div className='flex flex-row justify-content divide-x items-center justify-between w-10/12 m-auto'>
                    <div className='flex flex-row justify-content items-center justify-between py-4'>
                        <FaUserCircle className='mx-2'/>
                        <p className='hover:cursor-pointer hover:opacity-50'>Login</p>
                    </div>
                    <div className='flex flex-row justify-content items-center'>
                        <FaUserPlus className='mx-2'/>
                        <p className='hover:cursor-pointer hover:opacity-50'>Register</p>
                    </div>
                    <div>
                        <FaAngleDoubleLeft className='ml-2 hover:cursor-pointer hover:opacity-50' onClick={() => setSideBar(!sideBar)}/>
                    </div>
                </div>
                <br/>
            </div>
        </div>
    )
}

export default Navbar