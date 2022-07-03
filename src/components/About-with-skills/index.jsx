import React from "react";
import heroSkillsProgress from "../../common/heroSkillsProgress";

const AboutWithSkills = () => {
  React.useEffect(() => {
    heroSkillsProgress();
  }, []);
  return (
    <div className="hero-sec section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <div className="sub-title">
                <h6>About Me</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="main-title wow" data-splitting>
                My mission is design develop the best Websites around.
              </h3>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                Hello! I’m Alex Smith. Web designer from USA, California, San
                Francisco. I have rich experience in web site design and
                building, also I am good at wordpress. I love to talk with you
                about our unique.
              </p>
              <a href="#0" className="simple-btn mt-40">
                Download C.V
              </a>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="skills-box full-width">
              <div className="skill-item">
                <h6 className="custom-font">UI / UX Design</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="90%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6 className="custom-font">Development</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="80%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6 className="custom-font">Graphic Design</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="88%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWithSkills;
