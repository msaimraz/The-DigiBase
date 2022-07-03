/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import Split from "../Split";

SwiperCore.use([Navigation]);

const Works2Slider = ({ subBG }) => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/ionicons.min.css" />
      </Head>
      <section
        className={`work-carousel section-padding caroul ${
          subBG ? "sub-bg" : ""
        } position-re`}
      >
        <div className="container-fluid mt-100">
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              Portfolio
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Our Works.
              </h3>
            </Split>
            <span className="tbg">Portfolio</span>
          </div>
          <div className="row">
            <div className="col-lg-12 no-padding">
              <div className="swiper-container">
                <div className="swiper-container">
                  {!load ? (
                    <Swiper
                      speed={1000}
                      loop={true}
                      spaceBetween={0}
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                        767: {
                          slidesPerView: 2,
                          spaceBetween: 0,
                        },
                        991: {
                          slidesPerView: 3,
                          spaceBetween: 0,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 0,
                        },
                      }}
                      navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                      }}
                      onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl =
                          navigationPrevRef.current;
                        swiper.params.navigation.nextEl =
                          navigationNextRef.current;
                      }}
                      onSwiper={(swiper) => {
                        setTimeout(() => {
                          swiper.params.navigation.prevEl =
                            navigationPrevRef.current;
                          swiper.params.navigation.nextEl =
                            navigationNextRef.current;

                          swiper.navigation.destroy();
                          swiper.navigation.init();
                          swiper.navigation.update();
                        });
                      }}
                      className="swiper-wrapper"
                      slidesPerView={1}
                    >
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/1.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>
                              <Link href="/works2/works2-dark">
                                art &amp; illustration
                              </Link>
                            </h6>
                            <h4>
                              <Link href="/project-details/project-details-dark">
                                <a>Innovation and Crafts.</a>
                              </Link>
                            </h4>
                            <Link href="/project-details2/project-details2-dark">
                              <a>
                                <span className="icon">
                                  <i className="fas fa-plus"></i>
                                </span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/2.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>
                              <Link href="/works2/works2-dark">
                                art &amp; illustration
                              </Link>
                            </h6>
                            <h4>
                              <Link href="/project-details/project-details-dark">
                                <a>Inspiring new space.</a>
                              </Link>
                            </h4>
                            <Link href="/project-details2/project-details2-dark">
                              <a>
                                <span className="icon">
                                  <i className="fas fa-plus"></i>
                                </span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/3.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>
                              <Link href="/works2/works2-dark">
                                art &amp; illustration
                              </Link>
                            </h6>
                            <h4>
                              <Link href="/project-details/project-details-dark">
                                <a>Natural plus modern.</a>
                              </Link>
                            </h4>
                            <Link href="/project-details2/project-details2-dark">
                              <a>
                                <span className="icon">
                                  <i className="fas fa-plus"></i>
                                </span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/4.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>
                              <Link href="/works2/works2-dark">
                                art &amp; illustration
                              </Link>
                            </h6>
                            <h4>
                              <Link href="/project-details/project-details-dark">
                                <a>Innovation and Crafts.</a>
                              </Link>
                            </h4>
                            <Link href="/project-details2/project-details2-dark">
                              <a>
                                <span className="icon">
                                  <i className="fas fa-plus"></i>
                                </span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/5.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6>
                              <Link href="/works2/works2-dark">
                                art &amp; illustration
                              </Link>
                            </h6>
                            <h4>
                              <Link href="/project-details/project-details-dark">
                                <a>Inspiring new space.</a>
                              </Link>
                            </h4>
                            <Link href="/project-details2/project-details2-dark">
                              <a>
                                <span className="icon">
                                  <i className="fas fa-plus"></i>
                                </span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  ) : null}

                  <div
                    ref={navigationNextRef}
                    className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
                  >
                    <i className="ion-ios-arrow-right"></i>
                  </div>
                  <div
                    ref={navigationPrevRef}
                    className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
                  >
                    <i className="ion-ios-arrow-left"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works2Slider;
