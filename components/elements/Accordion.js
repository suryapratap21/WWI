import React, { useState } from "react";

const Accordion = () => {
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
      <ul className="accordion-box wow fadeInRight">
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
            What are the main immigration pathways available for Canada?
            <div className="icon fa fa-angle-right" />
          </div>
          <div
            className={
              isActive.key == 1 ? "acc-content current" : "acc-content"
            }
          >
            <div className="content">
              <div className="text">
                Canada offers several immigration pathways, including Express
                Entry (Federal Skilled Worker, Canadian Experience Class,
                Federal Skilled Trades), Provincial Nominee Program (PNP),
                Family Sponsorship, and Study or Work Permits.
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
            How does Express Entry work, and what are its requirements?
            <div className="icon fa fa-angle-right" />
          </div>
          <div
            className={
              isActive.key == 2 ? "acc-content current" : "acc-content"
            }
          >
            <div className="content">
              <div className="text">
                Express Entry is a points-based system that manages applications
                for permanent residency under specific federal immigration
                programs. To be eligible, candidates must meet criteria related
                to age, education, work experience, language proficiency, and
                adaptability.
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
            What is the Provincial Nominee Program (PNP), and how does it
            function?
            <div className="icon fa fa-angle-right" />
          </div>
          <div
            className={
              isActive.key == 3 ? "acc-content current" : "acc-content"
            }
          >
            <div className="content">
              <div className="text">
                Yes, Canada allows Canadian citizens and permanent residents to
                sponsor their family members, including spouses, common-law
                partners, dependent children, parents, and grandparents, for
                immigration to Canada.
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

export default Accordion;
