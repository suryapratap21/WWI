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
                  The Express Entry system, instituted by the Canadian
                  government, serves as an emblem of hope for numerous skilled
                  immigrants around the world. As a forward-thinking approach to
                  immigration, it systematically evaluates candidates based on a
                  multitude of personal and professional criteria. This robust
                  evaluation ensures that Canada attracts the brightest minds,
                  perfectly aligned with the nation's growth trajectory.
                </p>
                <p>
                  Within this system, the three distinct streams, namely Federal
                  Skilled Workers, Federal Skilled Trades, and the Canadian
                  Experience Class, ensure a broad spectrum of professionals
                  find their rightful place in the Canadian landscape. Each of
                  these pathways offers immigrants a chance to build a future in
                  a country that values their skills and contribution, truly
                  manifesting the Canadian ethos of diversity and inclusion.{" "}
                </p>
              </>
            ),
            secondary: (
              <>
                <ul>
                  <li>
                    <strong>Holistic Evaluation:</strong> Factors such as age,
                    work experience, education, and language proficiency play a
                    pivotal role in securing a higher ranking.
                  </li>
                  <li>
                    <strong>Multiple Streams:</strong> Tailored options
                    including the Federal Skilled Workers, Federal Skilled
                    Trades, and Canadian Experience Class cater to diverse
                    professional backgrounds.
                  </li>
                  <li>
                    <strong>Invitation to Apply:</strong> High-ranking
                    individuals receive an Invitation to Apply (ITA) for
                    permanent residency, paving their path to becoming Canadian
                    citizens.
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
