import Link from "next/link";
import React from "react";
import Accordion from "../elements/Accordion";

const TeamDetails = ({ alternate }) => {
  return (
    <>
      <section className="team-details">
        <div className="container pb-100">
          <div className="team-details__top pb-70">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__top-left">
                  <div className="team-details__top-img">
                    {" "}
                    <img
                      style={{
                        width: 520,
                        height: 570,
                        objectFit: "none",
                      }}
                      src="/images/vishvek.webp"
                      title="WWI"
                    />
                    <div className="team-details__big-text"></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="team-details__top-right">
                  <div className="team-details__top-content">
                    <h3 className="team-details__top-name">Vishvek Babbar</h3>
                    <p className="team-details__top-title">
                      Managing Director & CEO
                    </p>
                    <div className="team-details__social">
                      {" "}
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>{" "}
                      <Link href="#">
                        <i className="fab fa-facebook"></i>
                      </Link>{" "}
                      <Link href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </Link>{" "}
                      <Link href="#">
                        <i className="fab fa-instagram"></i>
                      </Link>{" "}
                    </div>
                    <p className="team-details__top-text-1">
                      I help my clients stand out and they help me grow.
                    </p>
                    <p className="team-details__top-text-3">
                      Vishvek Babbar is a Regulated Canadian Immigration
                      Consultant (RCIC) registered with the CICC (No. R708805).
                      Being an immigrant himself, Vishvek and his team
                      understand the importance and success of each immigration
                      application{" "}
                    </p>
                    <p className="team-details__top-text-2">
                      Vishvek and his team have extensive knowledge and
                      experience of Canadian Immigration laws and regulations.
                      The team is well informed of the constantly changing
                      Canadian Immigration landscape and policies and can
                      provide you with the best possible solution for your needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-contact-form">
        <div className="container pb-100">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="sec-title text-center">
                <span className="sub-title">Contact With Us Now</span>
                <h2 className="section-title__title">
                  Feel Free to Write Our Experts
                </h2>
              </div>
              <form
                id="contact_form"
                name="contact_form"
                className=""
                action="#"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_name"
                        className="form-control"
                        type="text"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_email"
                        className="form-control required email"
                        type="email"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_subject"
                        className="form-control required"
                        type="text"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_phone"
                        className="form-control"
                        type="text"
                        placeholder="Enter Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    name="form_message"
                    className="form-control required"
                    rows="5"
                    placeholder="Enter Message"
                  />
                </div>
                <div className="mb-3 text-center">
                  <input
                    name="form_botcheck"
                    className="form-control"
                    type="hidden"
                    value="/team"
                  />
                  <button type="submit" className="theme-btn btn-style-one">
                    <span className="btn-title">Send message</span>
                  </button>
                  <button type="reset" className="theme-btn btn-style-one mx-3">
                    <span className="btn-title">Reset</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetails;
