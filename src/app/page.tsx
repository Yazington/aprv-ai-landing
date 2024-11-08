import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Challenges from "./components/ChallengesSection";
import Product from "./components/ProductSection";
import Footer from "./components/Footer";
import InteractiveBackground from "./components/InteractiveBackground";
import HowItWorks from "./components/HowItWorks";
import KeyBenefits from "./components/KeyBenefits";
import FeaturesOverview from "./components/FeaturesOverview";
import BetaProgram from "./components/BetaProgram";
import AboutUs from "./components/AboutUs";
import FAQSection from "./components/FAQSection";
// import Custom from "./components/Custom";

export default function Home() {
  return (
    <div className="relative min-h-screen dark:bg-dark">
      <InteractiveBackground />
      <div className="flex flex-1 relative z-10 flex-col min-h-screen justify-center items-center">
        <Header />
        <main className="flex flex-col p-16 m-16 justify-center items-center w-[70%]">
          <HeroSection />
          <div className="m-28">
            <Challenges />
          </div>
          <div className="m-28">
            <Product />
          </div>
          <div className="m-28">
            <HowItWorks />
          </div>
          <div className="m-28">
            <KeyBenefits />
          </div>
          <div className="m-28">
            <FeaturesOverview />
          </div>
          <div className="m-28">
            <BetaProgram />
          </div>
          <div className="m-28">
            <AboutUs />
          </div>
          <div className="m-28">
            <FAQSection />
          </div>
          {/* <div className="m-28">
            <Custom />
          </div> */}
        </main>
        <Footer />
      </div>
    </div>
  );
}
