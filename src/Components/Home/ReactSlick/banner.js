import { Component } from "react";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./banner.css"
import Events from "../Events/event"
import Events1 from "../Events1/event1.js"
import Products from "../Products/product"
import BlogArticles from "../BlogArticles/blog";
import PrayerRequest from "../PrayerRequest/prayer";
import Cards from "../Cards/card";

class ReactSlick extends Component{
    render(){

        const settings={
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            ltr: true
        }
        return <div className="slider-container">
            <Slider {...settings}>
                <div className="slide1">
                  <img className="slide-img" src="https://sonsministries.in/wp-content/uploads/2020/08/banner-img-1.jpg" alt="slide1"/>  
                </div>
                <div className="slide1">
                <img className="slide-img" src="https://sonsministries.in/wp-content/uploads/2020/08/banner-img-2.jpg" alt="slide2"/>    
                </div>
                <div className="slide1">
                <img className="slide-img" src="https://sonsministries.in/wp-content/uploads/2020/08/banner-img-3.jpg" alt="slide3"/>    
                </div>
                <div className="slide1">
                <img className="slide-img" src="https://sonsministries.in/wp-content/uploads/2020/08/banner-img-4.jpg" alt="slide4"/>    
                </div>
                <div className="slide1">
                <img className="slide-img" src="https://sonsministries.in/wp-content/uploads/2020/08/banner-img-5.jpg" alt="slide5"/>    
                </div>
            </Slider>
            <div className="dark-shadow">
            
                <div className="content">
                <h1 className="title">Welcome to Sons’ Ministries</h1>
                <p className="para1">Greetings to you in the name of Christ. I am so glad you visited our website.</p>
                <p className="para2">We are a Christ centered community located in Nalgonda- a tiny town, in the
                     thick of Telangana. Taught by Christ, forgiven by the Father, sealed by
                      the Spirit of God, with an indwelling fire for our Lord, we are the children
                     of the Most High, having rendered our lives in obedience to the great
                    comission of Christ (Matthew 28:19-20). Our church is a place, where
                     any ordinary person can walk in and be spiritually revolutionized every week
                      by passionate teaching, dynamic worship and a friendly community!</p>
                <p className="para3">We would love to have you with us, as you discover Sons’ to be a safe place 
                    to satisfy your Spirit, to seek God and find Him, serving Him and His dear
                     ones with us. Welcoming you from wherever you are, you can be a part of our
                      family through your presence or by staying connected to our Media. To know
                       about the heart of our ministry and how best we can serve you, do explore our website.</p>      
           
                <p>Warmly,</p>
                <p>Bro. Ravinder</p>
                </div>
            </div>
            <Events/>
            <Events1/>
            <Products/>
            <BlogArticles/>
            <PrayerRequest/>
            <Cards/>
        </div>
        
    }
}

export default ReactSlick