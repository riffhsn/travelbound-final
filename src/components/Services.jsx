import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

const Services = () => {
  return (
    <div>
      <div className='services_head font-bold text-6xl text-center p-14'>
<h2 className='services_title'>Services</h2>
      </div>
      <Slider {...settings}>
      <div>
<img src='./images/chalanbeel3.png' alt='services_1' className='relative'></img>
<h3 className='absolute top-1/2 left-1/2 text-3xl text-green'>Cultural Experiences</h3>
      </div>
      <div>
      <img src='./images/chalanbeel3.png' alt='services_2'></img>
      </div>
      <div>
      <img src='./images/chalanbeel3.png' alt='services_2'></img>
      </div>
      <div>
      <img src='./images/chalanbeel3.png' alt='services_2'></img>
      </div>
    </Slider>

    </div>
  )
}

export default Services