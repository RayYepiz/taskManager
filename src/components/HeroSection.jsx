import React from "react";
import MyForm from "./MyForm";

function HeroSection() {
  return (
    <div className="heroWrapper">
      <div className="heroSide">
        <h1>
          TASK <span>MANAGEMENT</span>
        </h1>
      </div>
      <div className="formSide">
        <h1>NEW TASK</h1>
        <MyForm />
      </div>
    </div>
  );
}

export default HeroSection;
