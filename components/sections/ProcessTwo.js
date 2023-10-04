import React from "react";

const ProcessTwo = () => {
  return (
    <>
      <section className="process-section-two">
        <div className="anim-icons full-width">
          <span className="icon icon-cards" />
          <span className="icon icon-object-1" />
        </div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">Our work process</span>
            <h2>
              Crafting Your Pathway to Canada <br /> Our Step-by-Step Approach
            </h2>
          </div>
          <div className="row">
            {/* Process block Two  */}
            <div className="process-block-two col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-interview-1" />
                  <span className="count">01</span>
                </div>
                <div className="info-box">
                  <h5 className="title">Personal Consultation</h5>
                  <div className="text">
                    Dive deep into your aspirations during our one-on-one
                    session.
                  </div>
                </div>
              </div>
            </div>
            {/* Process block Two  */}
            <div
              className="process-block-two col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-form" />
                  <span className="count">02</span>
                </div>
                <div className="info-box">
                  <h5 className="title">Customized Application Strategy</h5>
                  <div className="text">
                    Tailoring an application plan uniquely for you.
                  </div>
                </div>
              </div>
            </div>
            {/* Process block Two  */}
            <div
              className="process-block-two col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="800ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-documents" />
                  <span className="count">03</span>
                </div>
                <div className="info-box">
                  <h5 className="title">Seamless Documentation</h5>
                  <div className="text">
                    Guiding you through every crucial document with precision.
                  </div>
                </div>
              </div>
            </div>
            {/* Process block Two */}
            <div
              className="process-block-two col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="1200ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-visa-3" />
                  <span className="count">04</span>
                </div>
                <div className="info-box">
                  <h5 className="title">Embark on Your Canadian Dream</h5>
                  <div className="text">
                    Secure your visa, and open the door to your Canadian future.
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

export default ProcessTwo;
