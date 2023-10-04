import Link from "next/link";
import React from "react";

const FeatureFour = () => {
  return (
    <>
      <section className="features-section-four">
        <div className="anim-icons">
          <span className="icon icon-shape-5" />
        </div>
        <div className="auto-container">
          <div className="row">
            {/* Content Column */}
            <div className="content-column col-lg-7 col-md-12 order-2">
              <div className="inner-column wow fadeInRight">
                <div className="sec-title light">
                  <i className="sub-title">Personalized approach</i>
                  <h2>Every client is unique, and so is our approach</h2>
                  <div className="text">
                    No two immigration stories are the same. We recognize the
                    individual dreams, challenges, and concerns that each client
                    brings to the table.
                  </div>
                </div>
                <div className="image-box">
                  <figure className="image">
                    <img src="images/resource/feature.jpg" title="WWI" />
                  </figure>
                  <i className="icon flaticon-passport-16" />
                </div>
              </div>
            </div>
            {/* Features Column */}
            <div className="features-column col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <div
                  className="bg-image"
                  style={{
                    backgroundImage:
                      "url(./images/resource/bg-personalized.jpg)",
                  }}
                />
                <div className="row">
                  {/* Feature Block Five  */}
                  <div className="feature-block-five">
                    <div className="inner-box">
                      <i className="icon flaticon-approved" />
                      <h5 className="title">Understanding Your Story</h5>
                      <div className="text">
                        We listen before we lead, ensuring your aspirations
                        guide our advice.
                      </div>
                    </div>
                  </div>
                  {/* Feature Block Five */}
                  <div className="feature-block-five">
                    <div className="inner-box">
                      <i className="icon flaticon-discount" />
                      <h5 className="title">Tailored Solutions</h5>
                      <div className="text">
                        Crafting personalized immigration strategies to fit
                        every unique journey.
                      </div>
                    </div>
                  </div>
                  {/* Feature Block Five */}
                  <div className="feature-block-five">
                    <div className="inner-box">
                      <i className="icon flaticon-help" />
                      <h5 className="title">Ongoing Support</h5>
                      <div className="text">
                        Beyond paperwork, we're your partner in every step of
                        your immigration journey.
                      </div>
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

export default FeatureFour;
