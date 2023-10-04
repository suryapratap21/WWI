import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const CtaThree = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        maxHeight: "50vh",
      }}
    >
      <video
        style={{
          width: "100%",
          maxHeight: "50vh",
          objectFit: "cover",
        }}
        playsinline
        autoPlay
        muted
        loop
        // src={"./images/background/WWI-background.mp4"}
        src={"./images/bg-video-flag.mp4"}
      />
      <section
        className="call-to-action-two"
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top: 0,
          width: "100%",
          height: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="title-box">
                <h2 className="title">
                  Charting Pathways to Canada,
                  <br /> One Story at a Time
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CtaThree;
