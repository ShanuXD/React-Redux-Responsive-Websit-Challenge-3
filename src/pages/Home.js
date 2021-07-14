import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Products from "../components/Products";
import About from "../components/About";

const Home = () => {
  return (
    <main className="home-page">
      <HeroSection />
      <Products />
      <About />
      <Footer />
    </main>
  );
};

export default Home;
