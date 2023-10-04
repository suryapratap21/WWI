import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import VisaDetails from "../components/sections/VisaDetails";

export default function StudyPermit() {
  return (
    <>
      <Layout HeaderStyle="three">
        <PageTitle pageName="Visa Details" />
        <VisaDetails
          content={{
            primary: (
              <>
                <p>
                  Education forms the backbone of any progressive society, and
                  Canada, with its world-renowned institutions, stands as a
                  global beacon of academic excellence. The study permit system
                  is more than just a bureaucratic procedure; it's an invitation
                  to global talent to experience, learn from, and contribute to
                  this educational powerhouse.
                </p>
                <p>
                  While the academic rigor of Canadian institutions shapes sharp
                  minds, the multicultural campuses mold global citizens. And
                  it’s not just about the years spent studying; it’s also about
                  the myriad opportunities that open up post-graduation, from
                  work experiences to pathways to permanent residency. Every
                  international student, with their dreams and aspirations,
                  finds a nurturing ground in Canada to let those dreams take
                  flight.{" "}
                </p>
              </>
            ),
            secondary: (
              <>
                <ul>
                  <li>
                    <strong>Gateway to Excellence:</strong> Access to top
                    universities and colleges with diverse courses and
                    specializations.
                  </li>
                  <li>
                    <strong>Post-Graduation Opportunities:</strong> Options like
                    the Post-Graduation Work Permit Program (PGWPP) allow
                    students to gain Canadian work experience.
                  </li>
                  <li>
                    <strong>Pathway to Residency:</strong> Many students
                    transition to permanent residency through programs like
                    Canadian Experience Class post their studies.
                  </li>
                </ul>
              </>
            ),
          }}
        />
      </Layout>
    </>
  );
}
