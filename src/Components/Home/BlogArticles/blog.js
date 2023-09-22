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
                        <img className="blog-img" src="https://s3-alpha-sig.figma.com/img/177f/792c/26d323fbe511384f25108a907bb245bc?Expires=1696204800&Signature=eYJBF3yG7YHoTHSw84NQ00MlPjm3zB0pfKz1B~jKDqeOXXU5fJzihWS7hJL7ULFsgye-k3N7H6JoLH1~3S0eMaulh6sbd35OWumjsen0SskeoAt6WsbrIpbxSx7-LV4SUICeKzqTNX-oMyaK2nRh9THWIPM5Amft-~Fe5K9XUD5PJ04XyeNMTSm~RvlqmV25t6lEnHOnqZffI095Fdd7AkvFLSnkCYG1OtQWsmwtIEJaewBVOlLeDQYsiViifRnpzFbOySk1JzKttshuDBEjVcnBkN9pXGVQFtF7Ffluhhy8jTRYRxKaCyuHdIJy3n5h-dSpPz2i5Ot2J1wUwV8sdA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="blog-img"/>
                        <div className="blog-para">
                            <h2>How to show faith like Abraham in practical situations?</h2>
                            <p>We all have known and heard about this well-known scripture– 
                                “Abraham believed and it was accounted to him for righteousness”-</p>
                        </div>
                    </div>
                    </div>
                    <div className="main-blog">
                    <div className="blog">
                    <img className="blog-img" src="https://s3-alpha-sig.figma.com/img/88d9/aa18/21f1e12e3c155d1b181724c69a9e70ba?Expires=1696204800&Signature=Lz5NrFab3~sbqRWrfJmdzAJK0S27zF8jm2Y4qhAENoUVUK0qPhyrChH1uaSkFJ9KNdMJ6XFmv7he5C~mfJFF6G~kdejSTutVlpxalEKsbULC1wpHoMdvXgnZEMK631XCthfcLioJRvVK9YSeo38GmHrf0I6bViP6auwOZ9rdBS2XkEGgLRczmBlt1KLSmwIq1FZBHg2yb6YzeX~lEkKYCLqYjk16d5-rae0~iw~VkunVEle~UkUarZPj06ioeKJZWzmteI-3C4AePBnB~N0Jxa055RBvw8Yo554ERdCerT8pXUnRP5xwoHCJ3NllDL8xvyMvQGGu5xkNTzQZ3vqTWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="blog-img"/>
                        <div className="blog-para">
                            <h2>How to show faith like Abraham in practical situations?</h2>
                            <p>We all have known and heard about this well-known scripture– 
                                “Abraham believed and it was accounted to him for righteousness”-</p>
                        </div>
                    </div>
                    </div>
                    <div className="main-blog">
                    <div className="blog">
                    <img className="blog-img" src="https://s3-alpha-sig.figma.com/img/7eea/7fc4/f4f0959d3216d8da4a73a56fd322e6bd?Expires=1696204800&Signature=EtufsLrUT1ua2PscsyQ843-1UzMBrFYtKNKOIlfPLVWa68VUO1-G9NLDRmOt4FUs1ReR3dXHXGLFp~pEobJXCzPFWoX6BWUh7w8it3vIC4lHaVoHbFTHdu6AOLkLQeJ0tR8RmVAbt7h8vA6MGW6KDgAxhaZdbRcAp8Wy1~3Vve8nsmAo2JR7nLM~Nv5gqUYUdLbNgdM4wamGL-ZLcssXsBzgZ3aJ3i-AEbanYIQMVzpkWS2LmfLOEd2oe~H1boEzPB43YlQ3QemjMPAQXfOLOQA-WkbZOW~inFsJG7xrxt~UQ~kGdaY0C0Ici1Os84eTOacyW8pQIGFPl5RdNHZqaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="blog-img"/>
                        <div className="blog-para">
                            <h2>How to show faith like Abraham in practical situations?</h2>
                            <p>We all have known and heard about this well-known scripture– 
                                “Abraham believed and it was accounted to him for righteousness”-</p>
                        </div>
                    </div>
                    </div>
                    <div className="main-blog">
                    <div className="blog">
                    <img className="blog-img" src="https://s3-alpha-sig.figma.com/img/1809/772d/dc936a853dab43fd58fe3815cf1c22f7?Expires=1696204800&Signature=CORvVfB11bt6VPyfaKskW8nYmPpbohBMkJeaXcws33xJ8FnuSppslzvSYvEYu7LohEFN9WC8sEZpYrV~1apXRB0jo-in3KnJXgQkKB4nv3LSi4y~nxdINRkZu35RedqSacYCLn2yAf-QaIUYhLKDtL~-BCs34IYz8idbfKzRw5F9lBC25yM3yjnTkPjRsJMWqBMfFNs-fiRe1mJxNwTHKAbV7Df~fgGPp0ebaSxFn9OdDKj26278HF0~HrLuBxgugtyv6nhA0SuGi8hcIrS2Y5dKcsbNKMBcvJsSOI9LqpLiQeARMnUDoXsTHl~eGEtUl1qG3LpFTI7sgWNimgKBaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="blog-img"/>
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