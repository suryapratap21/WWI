import Link from "next/link";
import React from "react";

const AboutFive = () => {
  return (
    <>
      <section className="about-section-five">
        <div className="auto-container">
          <div className="anim-icons">
            <span className="icon icon-object-3" />
          </div>
          <div className="row">
            <div
              className="content-column col-lg-6 col-md-12 order-2 wow fadeInRight"
              data-wow-delay="600ms"
            >
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">About our company</span>
                  <h2>Award Winning Visa &amp; Immigration Firm.</h2>
                  <div className="text">
                    At Western Wonders Immigration, our mission is to provide
                    comprehensive support and guidance throughout your
                    immigration journey. With a team of dedicated experts, we
                    aim to streamline the entire process, from initial
                    consultations to visa applications and settlement
                    assistance, ensuring a seamless transition to your new home.
                  </div>
                </div>
                <div className="info-box">
                  <div className="inner">
                    <i className="icon fa fa-check" />
                    <h5 className="title">The Best Visa Services</h5>
                    {/* <div className="text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered.
                    </div> */}
                    <ul className="list-style-three">
                      <li>Expert Guidance, Hassle-Free Process</li>
                      <li>Personalized Support for Your Journey</li>
                    </ul>
                  </div>
                </div>
                <div className="btn-box">
                  <a href="tel:+16476089854" className="info-btn">
                    <i className="icon fa fa-phone" />
                    <small>Call Anytime</small> +1 (647) 608-9854
                  </a>
                  <Link href="/page-about" className="theme-btn btn-style-one">
                    <span className="btn-title">Explore now</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12">
              <div className="inner-column wow fadeInLeft">
                <figure className="image overlay-anim wow fadeInUp">
                  <img
                    style={{
                      maxHeight: "500px",
                      objectFit: "cover",
                    }}
                    src="images/resource/about_v1.jpg"
                    title="WWI"
                  />
                </figure>
                <figure className="stemp bounce-y">
                  <img src="images/resource/stemp-3.png" title="WWI" />
                </figure>
                <div className="experience">
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

export default AboutFive;
