import React from "react";
import MyForm from "./MyForm";

function HeroSection() {
  return (
    <div className="heroWrapper">
      <div className="heroSide">
        <h1>
          TASK <span className="mgmt">MANAGEMENT</span>
        </h1>
      </div>
      <div className="formSide">
        <h1 className="formHeader">NEW TASK</h1>
        <MyForm />
      </div>
    </div>
  );
}

export default HeroSection;
