import Footer from "./components/footer";
import HeroSection from "./components/myhero";
import Navbar from "./components/navbar";
import Design from "./components/design";
import Cards from "./components/cards";
import Book from "./components/bookcall";
// import About from "./components/aboutus";
import React from "react";
import PartnerCompanies from "./components/partner";
import Mobilenavbar from "./components/mobilenavbar";

export default function Page() {
  return (
    <div style={{ backgroundColor: '#000000' }}> {/* Set background color */}
      <Navbar />
      <div className="min-h-screen">
        <HeroSection />
        <PartnerCompanies />
      </div>
      <Design />
      <Cards />
      <Book />
      {/* <Mobilenavbar/> */}
      {/* <About/> */}
      <Footer />
    </div>
  );
};
