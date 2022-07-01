import React from "react";
import Link from "next/link";

const Services2 = () => {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="row rone">
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".4s">
            <div className="mas-item">
              <span className="icon pe-7s-monitor"></span>
              <h6>
                Website <br /> Developments
              </h6>
              <div className="text-right">
                <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-camera"></span>
              <h6>
                Product <br /> Photography
              </h6>
              <div className="text-right">
                <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-phone"></span>
              <h6>
                Mobile App <br /> Devlopment
              </h6>
              <div className="text-right">
                <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
        </div>
        <div className="row rtwo">
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-diskette"></span>
              <h6>
                Document <br /> Legal Policy
              </h6>
              <div className="text-right">
                <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-help2"></span>
              <h6>
                Managing <br /> Community
              </h6>
              <div className="text-right">
                <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-arc"></span>
              <h6>
                Coustomer <br /> Engagement
              </h6>
              <div className="text-right">
                <Link href="/about/about-dark">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2;
