/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectDetailsImages = () => {
  return (
    <section className="projdtal">
      <h2 style={{ display: "none" }}> &nbsp; </h2>
      <div className="container-fluid">
        <div className="justified-gallery">
          <div className="row">
            <div className="col-md-6 pr-0">
              <a href="img/portfolio/project1/1.jpg">
                <img alt="" src="/img/portfolio/project1/1.jpg" />
              </a>
            </div>
            <div className="col-md-6">
              <a href="img/portfolio/project1/2.jpg">
                <img alt="" src="/img/portfolio/project1/2.jpg" />
              </a>
            </div>
            <div className="col-md-2 pr-0">
              <a href="img/portfolio/project1/3.jpg">
                <img alt="" src="/img/portfolio/project1/3.jpg" />
              </a>
            </div>
            <div className="col-md-5 pr-0">
              <a href="img/portfolio/project1/4.jpg">
                <img alt="" src="/img/portfolio/project1/4.jpg" />
              </a>
            </div>
            <div className="col-md-5 ">
              <a href="img/portfolio/project1/5.jpg">
                <img alt="" src="/img/portfolio/project1/5.jpg" />
              </a>
            </div>
            <div className="col-md-6">
              <a href="img/portfolio/project1/6.jpg">
                <img alt="" src="/img/portfolio/project1/6.jpg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsImages;
