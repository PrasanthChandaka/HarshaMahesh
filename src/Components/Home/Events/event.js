import {Component} from "react"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./event.css"

class Events extends Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
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


        return <div className="events">
            <div className="event-line">
            <p>NEWS AND EVENTS</p>
            <hr className="hr-line"/>
            </div>
            <div className="react-slider">
                <Slider {...settings}>
                    <div className="carousal">
                        <img className="img1" src="https://sonsministries.in/wp-content/uploads/2021/06/IMG-20210623-WA0024-1024x1024.jpg" alt="img"/>
                        
                    </div>
                    <div className="carousal">
                        <img className="img1" src="https://sonsministries.in/wp-content/uploads/2021/06/IMG-20210619-WA0042-1024x965.jpg" alt="img"/>
                        
                    </div>
                    <div className="carousal">
                        <img className="img1" src="https://sonsministries.in/wp-content/uploads/2021/06/IMG-20210623-WA0024-1024x1024.jpg" alt="img"/>
                        
                    </div>
                    <div className="carousal">
                        <img className="img1" src="https://sonsministries.in/wp-content/uploads/2021/06/IMG-20210619-WA0042-1024x965.jpg" alt="img"/>
                        
                    </div>
                    <div className="carousal">
                        <img className="img1" src="https://sonsministries.in/wp-content/uploads/2021/06/IMG-20210623-WA0024-1024x1024.jpg" alt="img"/>
                        
                    </div>
                    <div className="carousal">
                        <img className="img1" src="https://sonsministries.in/wp-content/uploads/2021/06/IMG-20210619-WA0042-1024x965.jpg" alt="img"/>
                        
                    </div>
                </Slider>
            </div>
        </div>

        
    }
}
export default Events