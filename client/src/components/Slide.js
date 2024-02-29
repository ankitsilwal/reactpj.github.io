import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/Slide.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.jpeg';

function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, 
    pauseOnHover: true,
    adaptiveHeight: true
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src={image1} alt="Slide 1" />
        </div>
        <div className="slide">
          <img src={image2} alt="Slide 2" />
        </div>
        <div className="slide">
          <img src={image3} alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
}

export default Slide;
