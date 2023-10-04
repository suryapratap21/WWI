import React from "react";
import Link from "next/link";

const ServiceOne = () => {
  const data = [
    {
      thumb_img: "service-1.jpg",
      title: "Study Permits",
      subTitle:
        "Assisting students in realizing their dream of studying in Canada.",
      url: "study-permit",
    },
    {
      thumb_img: "service-2.jpg",
      title: "Work Permits",
      subTitle:
        "Aid in securing employment and navigating the work permit process.",
      url: "work-permit",
    },
    {
      thumb_img: "service-3.jpg",
      title: "Visitor Visas",
      subTitle: "Guidance for those wanting to explore Canada.",
      url: "visitor-visa",
    },
    {
      thumb_img: "service-1.jpg",
      title: "Express Entry",
      subTitle:
        "Assistance with Canada's Express Entry system, including FSW, FST and CEC.",
      url: "express-entry",
    },
    {
      thumb_img: "service-2.jpg",
      title: "Provincial Nominee Programs (PNP)",
      subTitle: "Information about province-specific immigration pathways.",
      url: "pnp",
    },
    {
      thumb_img: "service-3.jpg",
      title: "Family Sponsorship",
      subTitle: "Helping families reunite in Canada.",
      url: "family-sponsorship",
    },
  ];
  return (
    <>
      <section className="services-section">
        <div className="anim-icons">
          {/* <span className="icon icon-object-2" /> */}
          <span className="icon icon-object-3" />
        </div>
        <div className="auto-container">
          <div className="sec-title">
            <div className="row">
              <div className="col-lg-7">
                <span className="sub-title">What do we offer</span>
                <h2>
                  Outstanding Immigration <br />
                  Visa Services.
                </h2>
              </div>
              <div className="col-lg-5">
                <div className="text">
                  Paving Your Path to Canadian Shores with Our Reliable
                  Expertise
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {data.map((item, i) => (
              <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href={item.url}>
                        <img
                          src={`images/resource/${item.thumb_img}`}
                          title="WWI"
                        />
                      </Link>
                    </figure>
                    <div className="icon-box">
                      <i className="icon fa fa-graduation-cap" />
                    </div>
                  </div>
                  <div className="content-box">
                    <h5 className="title">
                      <Link href={item.url}>{item.title}</Link>
                    </h5>
                    <div className="text">{item.subTitle}</div>
                    <Link href={item.url} className="read-more">
                      Read More <i className="fa fa-long-arrow-alt-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceOne;
