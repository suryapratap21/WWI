import React, { useState } from "react";

const AccordionLeft = () => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <ul className="accordion-box wow fadeInLeft">
        {/*Block*/}
        <li
          className={
            isActive.key == 1
              ? "accordion block active-block"
              : "accordion block"
          }
          onClick={() => handleToggle(1)}
        >
          <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"}>
            What are the language requirements for Canadian immigration?
            <div className="icon fa fa-angle-right" />
          </div>
          <div
            className={
              isActive.key == 1 ? "acc-content current" : "acc-content"
            }
          >
            <div className="content">
              <div className="text">
                Language proficiency in English or French is essential for most
                Canadian immigration programs. Applicants may need to take a
                language test like IELTS or CELPIP (for English) or TEF (for
                French) to demonstrate their language abilities.
              </div>
            </div>
          </div>
        </li>
        {/*Block*/}
        <li
          className={
            isActive.key == 2
              ? "accordion block active-block"
              : "accordion block"
          }
          onClick={() => handleToggle(2)}
        >
          <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"}>
            Is it mandatory to have a job offer to immigrate to Canada?
            <div className="icon fa fa-angle-right" />
          </div>
          <div
            className={
              isActive.key == 2 ? "acc-content current" : "acc-content"
            }
          >
            <div className="content">
              <div className="text">
                While a job offer is not always mandatory, having a valid job
                offer from a Canadian employer can significantly boost your
                chances of getting selected under certain immigration pathways,
                such as Express Entry or some PNPs.
              </div>
            </div>
          </div>
        </li>
        {/*Block*/}
        <li
          className={
            isActive.key == 3
              ? "accordion block active-block"
              : "accordion block"
          }
          onClick={() => handleToggle(3)}
        >
          <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"}>
            What is the Comprehensive Ranking System (CRS) score in Express
            Entry?
            <div className="icon fa fa-angle-right" />
          </div>
          <div
            className={
              isActive.key == 3 ? "acc-content current" : "acc-content"
            }
          >
            <div className="content">
              <div className="text">
                The CRS score is a points-based system used to rank candidates
                in the Express Entry pool. It considers factors like age,
                education, work experience, language proficiency, and
                adaptability. Higher CRS scores increase the likelihood of
                receiving an Invitation to Apply (ITA) for permanent residency.
              </div>
            </div>
          </div>
        </li>
        {/*Block*/}
        {/* <li className={isActive.key == 4 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(4)}>
                    <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"}>How can i find my solutions?
                        <div className="icon fa fa-angle-right" />
                    </div>
                    <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit.</div>
                        </div>
                    </div>
                </li> */}
      </ul>
    </>
  );
};

export default AccordionLeft;
