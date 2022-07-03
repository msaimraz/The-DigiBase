import React from "react";
import Link from "next/link";

const ProjectDetails2Header = () => {
  return (
    <section
      className="page-header proj-det bg-img parallaxie valign"
      style={{ backgroundImage: "url(/img/portfolio/project2/bg.jpg)" }}
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9">
            <div className="cont">
              <h6>art &amp; illustration</h6>
              <h2>Inspiring new space.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Client</h6>
              <p>
                <a href="#0">Envato.com</a>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>6 August 2022</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Categories</h6>
              <p>
                <Link href="/works/works-dark">Web Design </Link> ,
                <Link href="/works/works-dark">WordPress</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Tags</h6>
              <p>
                <Link href="/works/works-dark">Minimal</Link> ,
                <Link href="/works/works-dark">Modern</Link> ,
                <Link href="/works/works-dark">Design</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails2Header;
