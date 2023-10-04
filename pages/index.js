import React from "react";
import Layout from "../components/layout/Layout";
import AboutFive from "../components/sections/AboutFive";
import BannerTwo from "../components/sections/BannerTwo";
import CtaThree from "../components/sections/CtaThree";
import FeatureFive from "../components/sections/FeatureFive";
import FeatureFour from "../components/sections/FeatureFour";
import FeatureThree from "../components/sections/FeatureThree";
import ProcessTwo from "../components/sections/ProcessTwo";
import VisaOne from "../components/sections/VisaOne";
import TestimonialThree from "../components/sections/TestimonialThree";
import TeamInner from "../components/sections/TeamInner";
import AboutFour from "../components/sections/AboutFour";
// import WhyChooseThree from "../components/sections/WhyChooseThree";

export default function Home() {
  return (
    <>
      <Layout HeaderStyle="two">
        <BannerTwo />
        <FeatureThree />
        <AboutFive />
        <CtaThree />
        <VisaOne />
        <AboutFour />
        {/* <WhyChooseThree /> */}
        <FeatureFour />
        {/* <TrainingThree /> */}
        <ProcessTwo />
        <FeatureFive />
        <TeamInner />
        <TestimonialThree />
      </Layout>
    </>
  );
}
