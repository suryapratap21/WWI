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
                  Canada, with its federated structure, understands the unique
                  needs and aspirations of each of its provinces and
                  territories. The Provincial Nominee Programs (PNP) stand as a
                  testament to this decentralized approach. Each program,
                  meticulously crafted, addresses the distinct economic and
                  social needs of a province or territory.
                </p>
                <p>
                  While provinces like British Columbia may focus on tech
                  professionals, others like Prince Edward Island might
                  prioritize agricultural experts. Such tailored programs ensure
                  that every region thrives, benefiting both the local
                  communities and the immigrants who call it home. Beyond just
                  professional alignment, these programs also enable cultural
                  and social integration, making the Canadian mosaic even
                  richer.{" "}
                </p>
              </>
            ),
            secondary: (
              <>
                <ul>
                  <li>
                    <strong>Province-Specific Needs:</strong> Each PNP is
                    tailored to address specific labor shortages and demographic
                    needs of the province or territory.
                  </li>
                  <li>
                    <strong>Diverse Opportunities:</strong> From skilled workers
                    to entrepreneurs, PNPs offer opportunities for various
                    immigrant categories.
                  </li>
                  <li>
                    <strong>Pathway to Permanent Residency:</strong> Successful
                    nominees can subsequently apply for Canadian permanent
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
