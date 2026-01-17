import "../styles/landing.css";

import CTA from "../components/Landing/CTA";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Landing/Hero";
import HowItWorks from "../components/Landing/HowItWorks";
import Pricing from "../components/Landing/Pricing";
import WhyKigali from "../components/Landing/WhyKigali";

const Landing = ({ onStart }) => {
  return (
    <>
      <Helmet>
        <title>Find the Best Neighborhoods in Kigali | Realty Spotters</title>
        <meta
          name="description"
          content="Discover the best places to live in Kigali based on your budget, lifestyle, and family needs."
        />
      </Helmet>

      <Hero onStart={onStart} />
      <HowItWorks />
      <WhyKigali />
      <Pricing />
      <CTA onStart={onStart} />
    </>
  );
};

export default Landing;
