import React from "react";
import into from "../../assests/images/intro.png";
import into1 from "../../assests/images/intro1.png";
const AboutHeader = () => {
  return (
    <>
      <div
        className="container-fluid aboutheader"
        style={{ backgroundImage: `url(${into})` }}
      ></div>
    </>
  );
};

export default AboutHeader;
