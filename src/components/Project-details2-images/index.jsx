/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectDetails2Images = () => {
  return (
    <section className="projdtal">
      <h2 style={{display: 'none'}}> &nbsp; </h2>
      <div className="container-fluid">
        <div className="justified-gallery">
          <div className="row">
            <div className="col-md-3 pr-0">
              <a href="img/portfolio/project2/1.jpg">
                <img alt="" src="/img/portfolio/project2/1.jpg" />
              </a>
            </div>
            <div className="col-md-3 pr-0">
              <a href="img/portfolio/project2/2.jpg">
                <img alt="" src="/img/portfolio/project2/2.jpg" />
              </a>
            </div>

            <div className="col-md-3 pr-0">
              <a href="img/portfolio/project2/3.jpg">
                <img alt="" src="/img/portfolio/project2/3.jpg" />
              </a>
            </div>
            <div className="col-md-3 pr-0">
              <a href="img/portfolio/project2/5.jpg">
                <img alt="" src="/img/portfolio/project2/5.jpg" />
              </a>
            </div>
            <div className="col-12">
              <a href="img/portfolio/project2/7.jpg">
                <img alt="" src="/img/portfolio/project2/7.jpg" className="big-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails2Images;
