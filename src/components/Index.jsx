import React from "react";
import HeroSection from "./HeroSection";
import Navigation from "./Navigation";
import TaskSection from "./TaskSection";

function index() {
  return (
    <div className="wrapper">
      <div className="heroSection">
        <HeroSection />
      </div>
      <div>
        <Navigation />
      </div>
      <div>
        <TaskSection />
      </div>
    </div>
  );
}

export default index;
