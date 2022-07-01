/* eslint-disable @next/next/no-img-element */
import React from "react";
import tooltipEffect from "../../common/tooltipEffect";
import teamSkillsProgress from "../../common/teamSkillsProgress";

const TeamWithSkills = () => {
  React.useEffect(() => {
    tooltipEffect()
    teamSkillsProgress()
  }, [])
  return (
    <div className="team-crv section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="content wow fadeInUp" data-wow-delay=".5s">
              <div className="sub-title">
                <h6>Our Staff</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="co-tit custom-font mb-15">
                We help to create visual strategies.
              </h3>
              <p>
                We are AVO. We create award-winning websites, remarkable brands
                and cutting-edge apps.Nullam imperdie.
              </p>
              <div className="skills-box mt-40">
                <div className="skill-item">
                  <h6 className="custom-font">UI / UX Design</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="90%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h6 className="custom-font">Apps Development</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="80%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="img-box">
              <div className="row">
                <div className="col-sm-6 toright">
                  <div className="full-width">
                    <div
                      className="img sizxl mb-30"
                      data-tooltip-tit="Stephanie Lawrence"
                      data-tooltip-sub="CEO, Colabrio Media"
                    >
                      <img src="/img/team/1.jpg" alt="" className="imago wow" />
                    </div>
                    <div
                      className="img sizmd"
                      data-tooltip-tit="Alex Regelman"
                      data-tooltip-sub="Co-Founder, Colabrio Media"
                    >
                      <img src="/img/team/2.jpg" alt="" className="imago wow" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 toleft valign">
                  <div className="full-width text-left">
                    <div
                      className="img sizmd mb-30"
                      data-tooltip-tit="Stacey Stamper"
                      data-tooltip-sub="Network Partner, Colabrio Media"
                    >
                      <img src="/img/team/3.jpg" alt="" className="imago wow" />
                    </div>
                    <div
                      className="img sizsm"
                      data-tooltip-tit="Stephanie Lawrence"
                      data-tooltip-sub="CEO, Colabrio Media"
                    >
                      <img src="/img/team/4.jpg" alt="" className="imago wow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamWithSkills