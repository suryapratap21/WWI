import Link from "next/link";
import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const BannerSliderTwo = () => {
  const data = [
    {
      img: "banner1.jpg",
      sub: "Solutions for all type of visas",
      title: "Trusted",
      heading: "Visa & Immigration Company",
    },
    {
      img: "banner2.jpg",
      sub: "Where Your Canadian Dream Starts",
      title: "PIONEERS",
      heading: "In Immigration Excellence",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".swiper-button-prev-style-3",
          nextEl: ".swiper-button-next-style-3",
        }}
        // breakpoints={{
        //     320: {
        //         slidesPerView: 1,
        //         spaceBetween: 30,
        //     },
        //     575: {
        //         slidesPerView: 1,
        //         spaceBetween: 30,
        //     },
        //     767: {
        //         slidesPerView: 1,
        //         spaceBetween: 30,
        //     },
        //     991: {
        //         slidesPerView: 2,
        //         spaceBetween: 30,
        //     },
        //     1199: {
        //         slidesPerView: 3,
        //         spaceBetween: 30,
        //     },
        //     1350: {
        //         slidesPerView: 3,
        //         spaceBetween: 30,
        //     },
        // }}
        className="news-carousel"
      >
        {data.map((item, i) => (
          <SwiperSlide>
            <div className="slide-item">
              <div
                className="bg-image"
                style={{
                  backgroundImage: `url(images/main-slider/${item.img})`,
                }}
              />
              <div className="auto-container">
                <div className="content-box">
                  <span className="sub-title animate-1">{item.sub}</span>
                  <div className="inner">
                    <h1 className="title animate-2">{item.title}</h1>
                    <h3 className="animate-3">{item.heading}</h3>
                    <div className="btn-box animate-4">
                      <Link
                        href="page-about"
                        className="theme-btn btn-style-one"
                      >
                        <span className="btn-title">Explore now</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BannerSliderTwo;
