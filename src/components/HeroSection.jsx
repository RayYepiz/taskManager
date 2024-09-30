import React from "react";
import MyForm from "./MyForm";

function HeroSection() {
  return (
    <div className="hero-wrapper">
      <div className="heroSection"></div>
      <div className="newTask">
        <MyForm />
      </div>
    </div>
  );
}

export default HeroSection;
