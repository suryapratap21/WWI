import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ContactInner from "../components/sections/ContactInner";
import MapOne from "../components/sections/MapOne";

export default function Home() {
  return (
    <>
      <Layout HeaderStyle="three">
        <PageTitle pageName="Contact" />
        <ContactInner />
        <MapOne />
      </Layout>
    </>
  );
}
