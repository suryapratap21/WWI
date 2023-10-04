import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const serviceListData = [
  {
    title: "Study Permit",
    linkurl: "study-permit",
  },
  {
    title: "Work Permit",
    linkurl: "work-permit",
  },
  {
    title: "Visitor Visa",
    linkurl: "visitor-visa",
  },
  {
    title: "Express Entry",
    linkurl: "express-entry",
  },
  {
    title: "PNP",
    linkurl: "pnp",
  },
  {
    title: "Family Sponsorship",
    linkurl: "family-sponsorship",
  },
];

const Serviceone = ({ content }) => {
  const router = useRouter();
  return (
    <>
      <section className="services-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="service-sidebar">
                <div className="sidebar-widget service-sidebar-single">
                  <div
                    className="service-sidebar wow fadeInUp"
                    data-wow-delay="0.1s"
                    data-wow-duration="1200m"
                  >
                    <div className="service-list">
                      <ul>
                        {serviceListData.map((eachitem, index) => (
                          <li>
                            <Link
                              className={
                                router.pathname === "/" + eachitem.linkurl
                                  ? "current"
                                  : ""
                              }
                              href={eachitem.linkurl}
                            >
                              <i className="fas fa-angle-right"></i>
                              <span>{eachitem.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8">
              <div className="services-details__content">
                {/* <img src="/images/resource/service-details.jpg" title="WWI" /> */}
                <h2>
                  {
                    serviceListData.find(
                      (element) =>
                        element.linkurl === router.pathname.substring(1)
                    ).title
                  }
                </h2>
                <p>{content.primary}</p>

                <div className="content mt-40">
                  <div className="text">{content.secondary}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Serviceone;
