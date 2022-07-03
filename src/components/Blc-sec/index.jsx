import React from "react";
import Link from "next/link";
import Split from "../Split";

const BlcSec = () => {
  return (
    <section className="blc-sec section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="intro md-mb30">
              <div className="sub-title">
                <h6>Know Us Better</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h2
                  className="extra-title wow words chars splitting"
                  data-splitting
                >
                  We help to create strategies, design & development.
                </h2>
              </Split>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="full-width">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  We never underestimate any parts of each project as
                  they&apos;re all essential to meeting the ultimate goal.
                  you&apos;ll be engaged in with our positive and enthusiastic
                  attitude.
                </p>
              </Split>
              <Split>
                <Link href="/about/about-dark">
                  <a
                    className="simple-btn custom-font mt-20 wow words chars splitting"
                    data-splitting
                  >
                    <span>Know More</span>
                  </a>
                </Link>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlcSec;
