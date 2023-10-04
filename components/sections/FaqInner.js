import React from "react";
import Accordion from "../elements/Accordion";
import AccordionLeft from "../elements/AccordionLeft";

const FaqOne = () => {
  return (
    <>
      <section
        className="faqs-section"
        style={{
          padding: 0,
        }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="form-column col-lg-6 col-md-12 col-sm-12">
              <AccordionLeft />
            </div>
            <div className="form-column col-lg-6 col-md-12 col-sm-12">
              <Accordion />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqOne;
