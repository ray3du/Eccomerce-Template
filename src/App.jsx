import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { productAction } from './actions/actions'
import './App.css'
import Best from './components/Home/Best'
import Latest from './components/Home/Latest'
import Navbar from './components/Home/Navbar'
import Offer from './components/Home/Offer'
import main from './public/img/main.jpg'

function App() {
    
  const [indicator, setIndicator] = useState({
    latest: "border-b-4 border-indigo-500",
    best: "",
    offer: ""
  })

  const dispatch = useDispatch()

  const fetchProducts = async () => {
    await axios.get('http://127.0.0.1:8000/product/')
    .then(res => {
      dispatch(productAction(res.data))
      console.log(res.data)
    }) 
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchProducts()
  }, [dispatch])

  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className='w-[95%] lg:w-10/12 m-auto my-2 relative'>
        <img src={main} alt="main" className='shadow-lg' />
        <p className='text-white text-5xl font-bold absolute top-[30%] text-center w-full'>Back To School</p>
        <p className='text-white text-xl font-bold absolute top-[55%] text-center w-full'>Versatile and cumfy</p>
      </div>
      <div className='flex flex-row justify-content justify-between items-center w-6/12 md:w-5/12 m-auto my-4 font-bold text-lg'>
        <button className={indicator.latest} onClick={() => setIndicator(prevState => ({...prevState, latest: 'border-b-4 border-indigo-500', best: '', offer: ''}))}>Latest</button>
        <button className={indicator.best} onClick={() => setIndicator(prevState => ({...prevState, latest: '', best: 'border-b-4 border-indigo-500', offer: ''}))}>Best Seller</button>
        <button className={indicator.offer} onClick={() => setIndicator(prevState => ({...prevState, latest: '', best: '', offer: 'border-b-4 border-indigo-500'}))}>Offers</button>
      </div>
      {/* <div className='flex justify-center items-center'>
        {!mainLoader ? <div className='loaderMain'></div> : null}
      </div> */}
      <div className='w-11/12 m-auto'>
      {
        indicator.latest !== "" ?
        <Latest />
        : indicator.best !== "" ? 
          <Best />
        : indicator.offer !== "" ? 
          <Offer />
        : null
      }
      </div>
    </div>
  )
}

export default App
