import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { MouseEventHandler } from "react"; 
import "./Slider.css";

function CustomPrevArrow(props: { className?: string; style?: {}; onClick?: MouseEventHandler<HTMLDivElement> }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", transform: "scale(3) translate(80%, -15%)", zIndex: "1" }}
            onClick={onClick}
        />
    );
}

function CustomNextArrow(props: { className?: string; style?: {}; onClick?: MouseEventHandler<HTMLDivElement> }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", transform: "scale(3) translate(-80%, -15%)" }}
            onClick={onClick}
        />
    );
}

export default function MainSlider() { 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500, 
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
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