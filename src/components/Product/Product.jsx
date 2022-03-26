import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { addView } from "../../actions/actions"
import Navbar from "../Home/Navbar"
import img from "../../public/img/main.jpg"

const Product = (props) => {

    const location = useLocation()
    const id = location.pathname.replace("/product/", "")
    
    const dispatch = useDispatch()
    const products = useSelector(state => state.product)

    const images = useSelector(state => state.allIMages)
    
    // useEffect(() => {
    //     var myCarousel = document.querySelector('#myCarousel')
    //     var carousel = new bootstrap.Carousel(myCarousel)
    // }, [])

    return (
        <div className="bg-gray-200 min-h-screen">
            <Navbar />
            <div className="flex flex-col md:flex-row w-[95%] m-auto">
                <div className="w-full md:w-6/12 my-12">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            {
                                images.map((image, i) => (
                                    image.product === id ?
                                        i === 0 ?
                                        <div key={image.id} className="carousel-item active" >
                                            <img src={image.path} className="d-block w-100 h-52 object-contain" alt="products" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>First slide label</h5>
                                                <p>Some representative placeholder content for the first slide.</p>
                                            </div>
                                        </div>
                                        :
                                        <div key={image.id} className="carousel-item" >
                                            <img src={image.path} className="d-block w-100 h-52 object-contain" alt="products" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>First slide label</h5>
                                                <p>Some representative placeholder content for the first slide.</p>
                                            </div>
                                        </div>
                                        : null
                                ))
                            }
                        </div>
                        <button className="carousel-control-prev bg-gray-800" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next bg-gray-800" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 my-12">
                        <p>Hello world</p>
                        <div>
                        {
                            products.map((product, i) => (
                                product.id === id ?
                                    <div key={product.id} className=" py-4 px-4 h-24 my-2 border border-gray-200 shadow-lg rounded bg-white relative my-12">
                                        <p className="font-bold">{product.name}</p>
                                    </div>
                                : null
                            ))   
                        }
                        </div>
                    </div>
                                    
            </div>
        </div>
    )
}

export default Product