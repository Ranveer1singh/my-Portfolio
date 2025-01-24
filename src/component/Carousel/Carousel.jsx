import React from 'react'
import Slider from "react-slick";
const Carousel = ({images}) => {

    console.log("Umages", images);
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.map((img, id) => (
          <div key={id} className="carousel_image bg-red ">
            <img
              src={img}
              alt={`image ${id}`}
              className="w-1/2 h-auto object-cover"
            />
          </div>
        ))}
      </Slider>
      </div>
  )
}

export default Carousel