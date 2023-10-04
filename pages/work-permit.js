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
                  A vibrant economy like Canada's thrives on diverse talents.
                  The work permit system, hence, serves as a bridge, connecting
                  global professionals with Canadian enterprises. Whether it’s
                  the allure of working for a tech giant in Toronto or the call
                  of the wild in the Canadian Rockies, there’s a place for every
                  professional here.
                </p>
                <p>
                  These permits, whether employer-specific or open, ensure that
                  professionals have the flexibility and security they need.
                  More than just a job, it’s about building careers, forming
                  professional networks, and sometimes, even finding a new
                  calling. Every work permit holder brings their unique flavor
                  to the Canadian workplace, making it a truly global
                  experience.{" "}
                </p>
              </>
            ),
            secondary: (
              <>
                <ul>
                  <li>
                    <strong>Open and Employer-specific Permits:</strong>{" "}
                    Flexibility to either work for a specific employer or choose
                    employment based on personal preferences.
                  </li>
                  <li>
                    <strong>Comprehensive Coverage:</strong> From temporary
                    roles to long-term assignments, the work permit system
                    accommodates diverse job durations and types.
                  </li>
                  <li>
                    <strong>Transitioning to Permanent Status:</strong> Work
                    experience in Canada can be leveraged to apply for permanent
                    residency.
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
