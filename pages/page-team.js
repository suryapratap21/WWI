import React from "react";
import Layout from "../components/layout/Layout";
import TeamInner from "../components/sections/TeamInner";
import PageTitle from "../components/sections/PageTitle";

export default function Home() {
  return (
    <>
      <Layout HeaderStyle="three">
        <PageTitle pageName="Team Grid" />
        <TeamInner />
      </Layout>
    </>
  );
}
