import React,{ Component } from "react"
import Slider from "react-slick";
import "./blog.css"
import HoverCards from "./HoverCards/hover.js";

class BlogArticles extends Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
           
     
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
                breakpoint: 768,
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
        return <>
         <div className="blog-article">
            <div className="blog-line">
            <p>BLOG ARTICLES</p>
            <hr className="hr-line"/>
            </div>               
                <Slider {...settings}>
                    <div className="main-blog">
                    <div className="blog">
                        <img className="blog-img" src="/BlogImages/blog-img1.png" alt="blog-img"/>
                        <div className="blog-para">
                            <h2>How to show faith like Abraham in practical situations?</h2>
                            <p>We all have known and heard about this well-known scripture– 
                                “Abraham believed and it was accounted to him for righteousness”-</p>
                        </div>
                    </div>
                    </div>
                    <div className="main-blog">
                    <div className="blog">
                    <img className="blog-img" src="/BlogImages/blog-img2.jpeg" alt="blog-img"/>
                        <div className="blog-para">
                            <h2>How to show faith like Abraham in practical situations?</h2>
                            <p>We all have known and heard about this well-known scripture– 
                                “Abraham believed and it was accounted to him for righteousness”-</p>
                        </div>
                    </div>
                    </div>
                    <div className="main-blog">
                    <div className="blog">
                    <img className="blog-img" src="/BlogImages/blog-img3.jpeg" alt="blog-img"/>
                        <div className="blog-para">
                            <h2>How to show faith like Abraham in practical situations?</h2>
                            <p>We all have known and heard about this well-known scripture– 
                                “Abraham believed and it was accounted to him for righteousness”-</p>
                        </div>
                    </div>
                    </div>
                    <div className="main-blog">
                    <div className="blog">
                    <img className="blog-img" src="/BlogImages/blog-img4.jpeg" alt="blog-img"/>
                        <div className="blog-para">
                            <h2>How to show faith like Abraham in practical situations?</h2>
                            <p>We all have known and heard about this well-known scripture– 
                                “Abraham believed and it was accounted to him for righteousness”-</p>
                        </div>
                    </div>
                    </div>
                    <div className="main-blog">
                    <div className="blog">
                    <img className="blog-img" src="/BlogImages/blog-img3.jpeg" alt="blog-img"/>
                        <div className="blog-para">
                            <h2>How to show faith like Abraham in practical situations?</h2>
                            <p>We all have known and heard about this well-known scripture– 
                                “Abraham believed and it was accounted to him for righteousness”-</p>
                        </div>
                    </div>
                    </div>
                </Slider>
                </div>
        
            <HoverCards/>
        
        </>
    }
}
export default BlogArticles