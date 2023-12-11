import React from "react";

//components
import NavMenu from './components/NavMenu'
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import Advantages from "./components/Advantages";
import Feedbacks from "./components/Feedbacks";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavMenu />
      <Hero />
      <FeaturesSection />
      <Advantages />
      <Feedbacks />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
