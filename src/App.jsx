import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAllIMages, addCategory, addColor, addImages, addShipment, addSize, addSubCategory, productAction } from './actions/actions'
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
    }) 
    .catch(err => {
      console.log(err)
    })
  }

  const fetchCategory = async () => {
    await axios.get('http://127.0.0.1:8000/category/')
    .then(res => {
      dispatch(addCategory(res.data))
    }) 
    .catch(err => {
      console.log(err)
    })
  }

  const fetchSubCategory = async () => {
    await axios.get('http://127.0.0.1:8000/subCategory/')
    .then(res => {
      dispatch(addSubCategory(res.data))
    }) 
    .catch(err => {
      console.log(err)
    })
  }

  const fetchColor = async () => {
    await axios.get('http://127.0.0.1:8000/color/')
    .then(res => {
      dispatch(addColor(res.data))
    }) 
    .catch(err => {
      console.log(err)
    })
  }

  const fetchSize = async () => {
    await axios.get('http://127.0.0.1:8000/size/')
    .then(res => {
      dispatch(addSize(res.data))
    }) 
    .catch(err => {
      console.log(err)
    })
  }

  const fetchShipment = async () => {
    await axios.get('http://127.0.0.1:8000/shipment/')
    .then(res => {
      dispatch(addShipment(res.data))
    }) 
    .catch(err => {
      console.log(err)
    })
  }

  const setImage = async (res) => {
    const images = res
    const duplicate = []
    const data = []

    for (let index = 0; index < images.length; index++) {
      if (!duplicate.includes(images[index].product)) {
        await axios.get(`http://127.0.0.1:8000${images[index].path}`, {responseType: 'blob'})
        .then(res => {
            const imageObjectURL = URL.createObjectURL(res.data)
            data.push({product: images[index].product, path: imageObjectURL})
          })
        .catch(err => {
            console.error(err)
        })  
      }
      duplicate.push(images[index].product)
    }
    return data
  }

  const setAllImage = async (res) => {
    const images = res
    const duplicate = []
    const data = []

    for (let index = 0; index < images.length; index++) {
      await axios.get(`http://127.0.0.1:8000${images[index].path}`, {responseType: 'blob'})
        .then(res => {
            const imageObjectURL = URL.createObjectURL(res.data)
            data.push({product: images[index].product, path: imageObjectURL})
          })
        .catch(err => {
            console.error(err)
        }) 
      duplicate.push(images[index].product)
    }
    return data
  }

  const fetchImages = async () => {
    await axios.get('http://127.0.0.1:8000/image/')
    .then(res => {
      setImage(res.data)
      .then(result => {
        dispatch(addImages(result))
      })
      .catch(err => console.error(err))
      setAllImage(res.data)
      .then(result => {
        dispatch(addAllIMages(result))
      })
      .catch(err => console.error(err))        
    }) 
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchProducts()
    fetchCategory()
    fetchSubCategory()
    fetchColor(),
    fetchSize(),
    fetchShipment(),
    fetchImages()
  }, [dispatch])

  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar />
      <div className='w-[95%] lg:w-10/12 m-auto my-2 relative min-h-48'>
        <img src={main} alt="main" className='shadow-lg w-full sm:w-9/12 m-auto my-4 min-h-48' />
        <p className='text-white text-5xl font-bold absolute top-[30%] text-center w-full'>Back To School</p>
        <p className='text-white text-xl font-bold absolute top-[55%] text-center w-full'>Versatile and cumfy</p>
      </div>
      <div className='flex flex-row justify-content justify-between items-center w-6/12 md:w-5/12 m-auto my-4 font-bold text-lg'>
        <button className={indicator.latest} onClick={() => setIndicator(prevState => ({...prevState, latest: 'border-b-4 border-indigo-500', best: '', offer: ''}))}>Latest</button>
        <button className={indicator.best} onClick={() => setIndicator(prevState => ({...prevState, latest: '', best: 'border-b-4 border-indigo-500', offer: ''}))}>Best Seller</button>
        <button className={indicator.offer} onClick={() => setIndicator(prevState => ({...prevState, latest: '', best: '', offer: 'border-b-4 border-indigo-500'}))}>Offers</button>
      </div>
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
