import {Component} from "react"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./product.css"


class Products extends Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 2000,
            ltr: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
          };


        return <div className="products">
            <h1>Our Products</h1>
            <p className="product-para">All our products are available live for you. You can grab your copy now.</p>
            <div className="react-slider">
            <Slider {...settings}>
                <div className="swipe">
                    <img src="/ProductImages/div1.full.jpg" className="slide-img" alt="product-img"/>
                    <p className="slide-para">Samarpan Kannada</p>
                </div>
                <div className="swipe">
                    <img src="/ProductImages/div2.full.jpg" className="slide-img" alt="product-img"/>
                    <p className="slide-para">Samarpan Hindi</p>
                </div>
                <div className="swipe">
                    <img src="/ProductImages/div3.full.jpg" className="slide-img" alt="product-img"/>
                    <p className="slide-para">Athi Parishudda Stalamu Nudi –Volume 4</p>
                </div>
                <div className="swipe">
                    <img src="/ProductImages/div4.full.jpg" className="slide-img" alt="product-img"/>
                    <p className="slide-para">Song Book – Disciple Church</p>
                </div>
                <div className="swipe">
                    <img src="/ProductImages/div2.full.jpg" className="slide-img" alt="product-img"/>
                    <p className="slide-para">Samarpan Hindi</p>
                </div>
            </Slider>
            </div>
        </div>
    }
}
export default Products