import Link from "next/link";
import React from "react";

const AboutFour = () => {
  return (
    <>
      <section className="about-section-four">
        <div className="auto-container">
          <div className="row">
            <div
              className="content-column col-xl-6 col-lg-12 wow fadeInRight"
              data-wow-delay="100ms"
            >
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">Visa applicatns</span>
                  <h2>Lets Plan your Trip to Dream Land.</h2>
                  <div className="text">
                    Unlock the pathway to your dream destination with our
                    specialized migration guidance. Our experienced team will
                    pave the way for your seamless journey to a new and
                    promising horizon.
                  </div>
                </div>
                <div className="row">
                  <div className="about-block col-lg-6 col-md-6">
                    <div className="inner">
                      <i className="icon flaticon-check-list" />
                      <h5 className="title">
                        Legal Immigration <br />
                        Success
                      </h5>
                    </div>
                  </div>
                  <div className="about-block col-lg-6 col-md-6">
                    <div className="inner">
                      <i className="icon flaticon-documents" />
                      <h5 className="title">
                        Required Documents <br />
                        Support
                      </h5>
                    </div>
                  </div>
                </div>
                <ul className="list-style-three">
                  <li>
                    Making your immigration dreams come true through legal
                    pathways.
                  </li>
                  <li>
                    Assistance with essential documents for a smooth immigration
                    process.
                  </li>
                </ul>
                <Link
                  href="page-visa-details"
                  className="theme-btn btn-style-one"
                >
                  <span className="btn-title">Explore now</span>
                </Link>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-xl-6 col-lg-12">
              <div className="inner-column wow fadeInLeft">
                <figure className="image overlay-anim wow fadeInUp">
                  <img src="images/resource/about-6.jpg" title="WWI" />
                </figure>
                <div className="experience bounce-y">
                  <div className="inner">
                    <i className="icon flaticon-rating" />
                    <div className="text">
                      <strong>87450</strong> happy customers
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="banner-box-three"
              style={{
                marginBottom: "50px",
              }}
            >
              <div className="inner-box">
                <iframe
                  src="https://www.youtube.com/embed/JowmSob0y_E"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    flexWrap: "wrap",
                    gap: "40px",
                    flex: 1,
                  }}
                >
                  <div>
                    <h3 className="title">
                      Denied? <br /> Deported? <br /> Overstayed?
                    </h3>
                  </div>
                  <div className="text-column">
                    <div className="text">
                      We can help you with Canadian Immigration.
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

export default AboutFour;
