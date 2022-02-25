import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "./Slider.scss";

interface IMainSlider {
    images: string[];
}

export default function MainSlider({ images }: IMainSlider) {
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
            {
                images.map((image) => {
                    return (
                        <div className="slide-content">
                            <img src={image} alt='slide-content' />
                        </div>
                    )
                })
            }

        </Slider>
    );
}