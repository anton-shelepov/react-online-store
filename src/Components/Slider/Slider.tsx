import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "./Slider.scss";

interface IMainSlider {
    images: string[]; 
    isDots?: boolean;
    isArrows?: boolean;
}

export default function MainSlider({ images, isDots = true, isArrows = true }: IMainSlider) {

    const settings = {
        dots: isDots,
        arrows: isArrows,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1, 
        customPaging: (i: any) => <img src={images[i]} alt='dots' /> 
    };

    return (
        <Slider {...settings}>
            {
                images.map((image) => {
                    return (
                        <div key={image} className="slide-content">
                            <img src={image} alt='slide-content' />
                        </div>
                    )
                })
            }
        </Slider>
    );
}