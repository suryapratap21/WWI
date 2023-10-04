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
                  Canada, with its mesmerizing natural wonders and bustling
                  urban centers, has much to offer to the wandering soul. The
                  Visitor Visa is the key to this treasure trove of experiences.
                  Whether one wishes to traverse the snow-capped peaks, delve
                  into the rich indigenous cultures, or just savor the
                  cosmopolitan life of its cities, there’s a story waiting to be
                  discovered.
                </p>
                <p>
                  But it's not just about tourism. Many come to Canada for
                  business meetings, conferences, or simply to spend time with
                  family and friends. Each visitor, with their unique purpose
                  and perspective, adds to the Canadian narrative, making it a
                  land of endless stories and experiences.{" "}
                </p>
              </>
            ),
            secondary: (
              <>
                <ul>
                  <li>
                    <strong>Tourist Expeditions:</strong> Explore Canada’s
                    diverse landscapes, from the Rocky Mountains to the Northern
                    Lights.
                  </li>
                  <li>
                    <strong>Business Visits:</strong> Facilitates short-term
                    visits for business meetings, conferences, and seminars.
                  </li>
                  <li>
                    <strong>Family and Friends:</strong> Allows for reunions,
                    ensuring that distances don't deter the spirit of
                    togetherness.
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
