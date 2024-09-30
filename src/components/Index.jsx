import React from "react";
import HeroSection from "./HeroSection";
import Navigation from "./Navigation";
import TaskSection from "./TaskSection";

function index() {
  return (
    <div>
      <h1>hello world!</h1>
      <HeroSection />
      <Navigation />
      <TaskSection />
    </div>
  );
}

export default index;
