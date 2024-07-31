import React from "react";
export const HeroSection = () => {
  const scrollToSection = () => {
    document
      .getElementById("target-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="HeroSection">
      <div className="HeroSection-container">
        <h2>Explore The Beauty Of The World</h2>
        <button className="HeroSection-btn" onClick={scrollToSection}>
          Explore
        </button>
      </div>
    </div>
  );
};
