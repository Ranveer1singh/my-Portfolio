import React, { useState } from "react";
import Image1 from "../../assets/images/achivement1.png";
import Image2 from "../../assets/images/achivement2.png";
import Image3 from "../../assets/images/achivement3.png";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Achivement = () => {
  const Images = [Image1, Image2, Image3, Image1, Image2, Image3];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openLightbox = (img) => {
    setCurrentImage(img);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  return (
    <section id="achivements">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h1
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="text-headingColor font-[800] text-[3rem] mb-5"
          >
            Achivments{" "}
          </h1>
        </div>

        {/* <div className="cards ">
          <div className=" bg-blue-400 flex flex-nowrap overflow-x-scroll scroll-smooth no-scrollbar justify-center gap-4  items-center p-5 h-[50vh] ">
            {Images.map((img,id)=>(

           <img className="h-full" src={img} alt="" />
            ))}
          </div>
        </div> */}

        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          //   navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          //   scrollbar={{ draggable: true }}
        >
          {Images.map((img, id) => (
            <SwiperSlide key={id}>
              <img
               className="cursor-pointer"
                src={img} 
                alt=""
                onClick={() => openLightbox(img)}
                 />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <img
            src={currentImage}
            alt="Full Screen"
            className="max-w-full max-h-full object-contain"
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeLightbox}
          >
            ✕
          </button>
        </div>
      )}
      </div>
    </section>
  );
};

export default Achivement;
