import Link from "next/link";
import React from "react";

const TeamOne = () => {
  return (
    <>
      <section className="team-section">
        <div className="anim-icons">
          <span className="icon icon-lines bounce-x" />
          <span className="icon icon-dots bounce-y" />
        </div>
        <div className="auto-container">
          <div className="row">
            <div className="team-block col-sm-12 wow fadeInUp">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/team">
                      <img src="/images/vishvek.webp" title="WWI" />
                    </Link>
                  </figure>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className="info-box">
                    <h5 className="name">
                      <Link href="/team">Vishvek Babbar</Link>
                    </h5>
                    <span className="designation">CEO</span>
                    <div
                      style={{
                        left: "-150px",
                        top: "0",
                      }}
                      className="social-links"
                    >
                      <Link href="/#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link href="/#">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link href="/#">
                        <i className="fab fa-pinterest-p" />
                      </Link>
                      <Link href="/#">
                        <i className="fab fa-instagram" />
                      </Link>
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

export default TeamOne;
