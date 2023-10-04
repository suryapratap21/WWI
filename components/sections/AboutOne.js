import Link from "next/link";
import React from "react";

const AboutOne = () => {
  return (
    <>
      <section className="about-section">
        <div className="auto-container">
          <div className="row">
            <div
              className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight"
              data-wow-delay="600ms"
            >
              <div className="inner-column">
                <div className="sec-title">
                  <h2>
                    Discover Our Journey: Navigating Dreams to Canadian Shores
                  </h2>
                  <h4>Canada Based Immigration Consultant Agency.</h4>
                  <div className="text">
                    Every story has a beginning, and ours started with a passion
                    for creating paths to a brighter future in Canada. At WWI
                    Immigration, we don't just guide you through immigration
                    procedures; we become a chapter in your story, a guiding
                    hand in your journey towards the Canadian dream. Over the
                    years, we've come to understand that it's not just about
                    moving locations, but about aspirations, family, and forging
                    a future in a land of endless possibilities. Our commitment
                    runs deep, from understanding your individual dreams to
                    making them a tangible reality. With each success story,
                    we're reminded of the importance of our role and are
                    inspired to set new standards in immigration consultancy.
                    Dive deeper and discover how, together, we can shape your
                    Canadian narrative.
                  </div>
                </div>
                <div className="row">
                  <div className="about-block col-lg-6 col-md-6">
                    <div className="inner">
                      <i className="icon flaticon-worldwide" />
                      <h5 className="title">
                        Best Immigration
                        <br /> Resources
                      </h5>
                    </div>
                  </div>
                  <div className="about-block col-lg-6 col-md-6">
                    <div className="inner">
                      <i className="icon flaticon-passport-16" />
                      <h5 className="title">
                        Return Visas <br />
                        Availabile
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <figure className="image-1 overlay-anim wow fadeInUp">
                  <img src="images/resource/about-1.jpg" title="WWI" />
                </figure>
                <figure className="image-2 overlay-anim wow fadeInRight">
                  <img src="images/resource/about-2.jpg" title="WWI" />
                </figure>
                <figure className="image-3 overlay-anim wow fadeInLeft">
                  <img src="images/resource/about-3.jpg" title="WWI" />
                </figure>
                <figure className="stemp">
                  <img src="images/resource/stemp.png" title="WWI" />
                </figure>
                <div className="experience bounce-y">
                  <div className="inner">
                    <i className="icon flaticon-increase" />
                    <div className="text">
                      <strong>36+</strong> Work Experience
                    </div>
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

export default AboutOne;
