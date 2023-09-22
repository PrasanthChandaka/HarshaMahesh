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
                    <img src="https://s3-alpha-sig.figma.com/img/d83a/98b4/bb53d0902931a5ea8af755c67948716d?Expires=1696204800&Signature=pMULfZUSeAIPSl2QPtDp8NWw0GSR4PDXUA9aEBZyfme3afvmE7--Wj1wm7m6oGkLAh7dO0a33iamBWGPCyEdKDWDzkN3viiIfFZ7pT7b9fhGWW6oIYA8K2rPndmFMWXJxInnUnl21r158I0YOzZxNZ0DuecbWM6gcRMCtQ9BdeEGgKGY6IxXptPZ7hWJBvaE9XVLwvTXkSxZS4OrK2Y3~Quwd9AxYRc92GPhYwm79lGJjdQMeGvj5GYCxnoRi00A6K6SABwVzMgYCIh~KVVhyusp6GCjBJn0HKaPa5tszskDfoh3KGMV~DvHp1Za8NMOgQ90H84lkIfPpr~zYWk-JA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="slide-img" alt="product-img"/>
                    <p className="slide-para">Samarpan Kannada</p>
                </div>
                <div className="swipe">
                    <img src="https://sonsministries.in/wp-content/uploads/2016/05/naa-aashrayam-neevey-315x400.jpg" className="slide-img" alt="product-img"/>
                    <p className="slide-para">Samarpan Hindi</p>
                </div>
                <div className="swipe">
                    <img src="https://s3-alpha-sig.figma.com/img/89f3/d54f/f6148ae77c664f83a53398895e350185?Expires=1696204800&Signature=BaW1~TQeJy1THeuYNEkC8LWBURW-YSPpuKPB4HB3fW7uuQZSeAKuZgJZm~D9wagxaCtkJV5L4PSdFv1kHJQ~iEKZ-1yFRO9ITrg-n3exa7SJdnNUM8p42rg1ICbr26FpgTYqqUJY5wPjLFDibLb9kh5z1IX8YoLpZnUSjnlBObp5-vzJ2Pn8iBclSdHcXqOUEWtvg~7Ig~sWThQTTkGq~w1qJnLP4kyuF4JzLtBnibR28eEVF5LXVPccVNF~iYQueRhHsmu6PaJgv7SvU1EYYFzjhaiP092RY~6NQf8RQo0m3l2SYauxlg3IQfZnc~75USTpD6wZTjxAk1mWUstU3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="slide-img" alt="product-img"/>
                    <p className="slide-para">Athi Parishudda Stalamu Nudi –Volume 4</p>
                </div>
                <div className="swipe">
                    <img src="https://s3-alpha-sig.figma.com/img/56ed/dcf1/431734829ca9e7e2d9f89d498bc7e3e2?Expires=1696204800&Signature=OEXG1mqxMS6xLMj~ROcp0lryaUgtJzhKWrVDyHsBFqF0ZIEwJuBxSVvqAMddOil~-grbd3LBwnQkmAdGU-Cp8BJP~PR6jB50Os5KdKN3kjsmR181I~2TJ~0yLuFmqGWosQ3BFw2JlK-1yTofUjxbrLwjXWaUqtRydkJS7bZPy~Stg3PfSp~FYUsR8fs5VjEf7nAG~y7p~iXpSpL6fhnOLI6WAdYfwf~HiCshL7LGEcv5P68yPIZnMe9zkwYR~4~2cO59gjOP34nLzwyc7nyscWwBdJQOj5S9UeMJXhAGJ6NchRw6TcSPx4JxE2LSFlecGWHKr2ICjNlsRm~Nub88Vg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="slide-img" alt="product-img"/>
                    <p className="slide-para">Song Book – Disciple Church</p>
                </div>
                <div className="swipe">
                    <img src="https://s3-alpha-sig.figma.com/img/33ca/1bcc/a9ef538ee4ec18becd158f8201192745?Expires=1696204800&Signature=Lfo23JNIU-wA42lBjN~T~39kHTZphvu1tlDGd1Pi~yEv9OUgpD5di1Pm~i~xeBTWI~1jm5HxCb49IEMDB5p1jmCCRQRnbEuAMtLqPKoQU7RmlpoKYZpta~l9aYuvq52Q88yBeb-Eqtc34r5~ucdYDbzMgW-9Udt2Cwk7nsfGuFRwD3GxiGKnG9U8S0Av5bb6HOCdBvqxuGZhuTAm8DitbaK1FgIOPUBIBa2EuSypdyhTtadAcgp0Rn~bxQ7L~g3S9aCeYLdqP29uisQTzqxKmgpw7wHut-Pn0IZk-DiN~I2uwXrslMKO7ZCg-xLFj-uOfR8jtHrWvlqM1dAszQ05oA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="slide-img" alt="product-img"/>
                    <p className="slide-para">Samarpan Hindi</p>
                </div>
            </Slider>
            </div>
        </div>
    }
}
export default Products