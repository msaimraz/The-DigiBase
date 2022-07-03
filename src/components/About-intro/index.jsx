import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who We Are ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  We develop creative solutions for small and big brands alike,
                  build authentic product identities and much more.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit sit non facilisis
                  vitae eu. Ultrices ut diam morbi risus dui, nec eget at lorem
                  in id tristique in elementum leo nisi eleifend placerat magna
                  lacus elementum ornare vehicula odio posuere quisque ultrices
                  tempus cras id blandit maecenas in ornare quis dolor tempus
                  risus vitae feugiat fames aliquet sede.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
