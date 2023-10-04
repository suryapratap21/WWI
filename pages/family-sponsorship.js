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
                  At its core, Canada believes in the unbreakable bonds of
                  family. The Family Sponsorship program is a reflection of this
                  belief, striving to keep families together, irrespective of
                  borders. Beyond just administrative procedures, this program
                  embodies the Canadian spirit of unity, compassion, and shared
                  futures.
                </p>
                <p>
                  By facilitating the reunification of spouses, children,
                  parents, and grandparents, Canada ensures that its residents
                  don’t have to choose between their new home and their loved
                  ones. The joy of shared milestones, the comfort of familiar
                  faces, and the solace of being together in times of distress –
                  this program ensures that these fundamental joys of life are
                  accessible to all.{" "}
                </p>
              </>
            ),
            secondary: (
              <>
                <ul>
                  <li>
                    <strong>Eligibility:</strong> Canadian citizens or permanent
                    residents can sponsor spouses, partners, children, parents,
                    and grandparents.
                  </li>
                  <li>
                    <strong>Priority Processing:</strong> Recognizing the
                    importance of family, these applications often receive
                    priority, reducing waiting times.
                  </li>
                  <li>
                    <strong>Long-Term Benefits:</strong> Sponsored family
                    members can live, study, and work in Canada once they become
                    permanent residents.
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
