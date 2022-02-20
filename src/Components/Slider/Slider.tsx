import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick"; 
import "./Slider.scss"; 

export default function MainSlider() { 
    const settings = { 
        dots: true,
        infinite: true,
        speed: 500, 
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1, 
    };
    return (
        <Slider {...settings}>
            <div className="slide-content">
                <img src='https://images.wbstatic.net/bners1/elsakka.jpg' alt='slider' />
            </div>
            <div className="slide-content">
                <img src='https://images.wbstatic.net/bners1/big_23fev_16_02.jpg' alt='slider' />
            </div>
            <div className="slide-content">
                <img src='https://images.wbstatic.net/bners1/big_best999.jpg' alt='slider' />
            </div>
            <div className="slide-content">
                <img src='https://images.wbstatic.net/bners1/big_spring_16_02.jpg' alt='slider' />
            </div>
        </Slider>
    );
}