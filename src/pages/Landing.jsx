import "../styles/landing.css";

import CTA from "../components/Landing/CTA";
import Hero from "../components/Landing/Hero";
import HowItWorks from "../components/Landing/HowItWorks";
import Pricing from "../components/Landing/Pricing";
import WhyKigali from "../components/Landing/WhyKigali";

const Landing = ({ onStart }) => {
  return (
    <>
      <Hero onStart={onStart} />
      <HowItWorks />
      <WhyKigali />
      <Pricing />
      <CTA onStart={onStart} />
    </>
  );
};

export default Landing;
