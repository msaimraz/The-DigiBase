import React from "react";
import Link from "next/link";
import introData from "../../data/sections/intro2.json";
import { Swiper, SwiperSlide } from "swiper/react";
import Split from "../Split";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import fadeWhenScroll from "../../common/fadeWhenScroll";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

const IntroWithSlider3 = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    fadeWhenScroll();
    setTimeout(() => {
      setLoad(false);
      removeSlashFromPagination();
    }, 1000);
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <header className="slider-bus position-re valign">
      <div className="container ontop">
        <div className="swiper-container parallax-slider">
          {!load ? (
            <Swiper
              speed={1000}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              pagination={{
                type: "fraction",
                clickable: true,
                el: paginationRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.params.pagination.el = paginationRef.current;
              }}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;

                  swiper.params.pagination.el = paginationRef.current;

                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();

                  swiper.pagination.destroy();
                  swiper.pagination.init();
                  swiper.pagination.update();
                });
              }}
              className="swiper-wrapper"
              slidesPerView={1}
            >
              {introData.map((slide) => (
                <SwiperSlide key={slide.id} className="swiper-slide">
                  <div className="row">
                    <div className="col-lg-6 col-md-8 offset-lg-1 offset-md-1">
                      <div className="caption">
                        <Split>
                          <h1 data-splitting className="words chars splitting">
                            <div className="thin">Unique brand</div> Stories
                          </h1>
                        </Split>
                        <p>
                          If you need to redesign your new project, new visual
                          strategy, ux structure or you do have some cool ideas
                          for collaboration.
                        </p>
                        <Link href="/works3/works3-dark">
                          <a className="btn-curve btn-color btn-radius mt-30">
                            <span>Discover Work</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : null}
        </div>
      </div>
      <div className="swiper-container swiper-img">
        {!load ? (
          <Swiper
            speed={1000}
            effect="fade"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              type: "fraction",
              clickable: true,
              el: paginationRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.params.pagination.el = paginationRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();

                swiper.pagination.destroy();
                swiper.pagination.init();
                swiper.pagination.update();
              });
            }}
            className="swiper-wrapper"
            slidesPerView={1}
          >
            <SwiperSlide
              className="swiper-slide bg-img"
              style={{ backgroundImage: 'url("/img/slid/1.jpg")' }}
              data-overlay-dark="6"
            ></SwiperSlide>
            <SwiperSlide
              className="swiper-slide bg-img"
              style={{ backgroundImage: 'url("/img/slid/2.jpg")' }}
              data-overlay-dark="6"
            ></SwiperSlide>
            <SwiperSlide
              className="swiper-slide bg-img"
              style={{ backgroundImage: 'url("/img/slid/3.jpg")' }}
              data-overlay-dark="6"
            ></SwiperSlide>
          </Swiper>
        ) : null}
      </div>
      <div
        className="curve-bg bg-img"
        style={{ backgroundImage: 'url("/img/business-bg.png")' }}
      ></div>

      <div className="setone">
        <div
          className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
          ref={navigationNextRef}
        >
          <i className="fas fa-chevron-right"></i>
        </div>
        <div
          className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
          ref={navigationPrevRef}
        >
          <i className="fas fa-chevron-left"></i>
        </div>
      </div>
      <div className="swiper-pagination custom-font" ref={paginationRef}></div>
    </header>
  );
};

export default IntroWithSlider3;
