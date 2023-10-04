import React from "react";

const MapOne = () => {
  return (
    <>
      <section>
        <div className="container-fluid p-0">
          <div className="row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.1615133575306!2d-79.77020502381812!3d43.20610158123304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9843646630f9%3A0x7836e1973d2c7e6d!2s38%20Hargrove%20Way%2C%20Hamilton%2C%20ON%20L8J%200K9%2C%20Canada!5e0!3m2!1sen!2sin!4v1696432208169!5m2!1sen!2sin&language=en"
              height="500"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default MapOne;
