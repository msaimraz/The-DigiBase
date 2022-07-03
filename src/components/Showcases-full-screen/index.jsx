import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import ShowcassesFullScreenData from "../../data/showcases-full-screen-slider.json";
import SwiperCore, {
  Navigation,
  Pagination,
  Parallax,
  Mousewheel,
} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";

SwiperCore.use([Navigation, Pagination, Parallax, Mousewheel]);

const ShowcasesFullScreen = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
      removeSlashFromPagination()
    }, 1000);
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);
  return (
    <header className="slider showcase-full">
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper
            speed={1000}
            mousewheel={true}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
                clickable: true,
                type: "fraction",
              el: paginationRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                for (var i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].childNodes[0].setAttribute(
                    "data-swiper-parallax",
                    0.75 * swiper.width
                  );
                }

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
            {ShowcassesFullScreenData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div
                  className="bg-img valign"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  data-overlay-dark="4"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-10 offset-lg-1">
                        <div className="caption">
                          <h1>
                            <Link href="/project-details2/project-details2-dark">
                              <a>
                                <div
                                  className="stroke"
                                  data-swiper-parallax="-2000"
                                >
                                  {slide.title.first}
                                </div>
                                <span data-swiper-parallax="-5000">
                                  {slide.title.second}
                                </span>
                              </a>
                            </Link>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>

      <div className="swiper-pagination dots" ref={paginationRef}></div>
      <div className="txt-botm">
        <div
          ref={navigationNextRef}
          className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
        >
          <div>
            <span className=" custom-font">Next Slide</span>
          </div>
          <div>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div
          ref={navigationPrevRef}
          className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
        >
          <div>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div>
            <span className=" custom-font">Prev Slide</span>
          </div>
        </div>
      </div>
      <div
        className="swiper-pagination steps custom-font"
        ref={paginationRef}
      ></div>
    </header>
  );
};

export default ShowcasesFullScreen;
