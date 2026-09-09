import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import BusinessOutcomes from "./components/BusinessOutcomes";
import Process from "./components/Process";
import TechStack from "./components/TechStack";
import CallToAction from "./components/CallToAction";
import "./about.css";

function About() {
  return (
    <>
      <Hero />
      <Expertise />
      <BusinessOutcomes />
      <Process />
      <TechStack />
      <CallToAction />
    </>
  );
}

export default About;