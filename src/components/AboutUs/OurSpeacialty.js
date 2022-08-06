import React from "react";
import patterenleft from "../../assests/icons/patteren-left.png";
import patterenright from "../../assests/icons/pattern.png";
import blueline1 from "../../assests/icons/blueline1.png";
import zwicon from "../../assests/images/zwicon.png";
import OGLogo from "../../assests/images/OGLogo.png";
const OurSpeacialty = () => {
  return (
    <>
      <div className="container-fluid">
        <img src={patterenleft} className="left-sep" alt="" />
        <div className="row sep-row">
          <div className="col-">
            <img src={OGLogo} className="oglogo" alt="" />
          </div>
        </div>
        <div>
          <img className="blueline" src={blueline1} alt="" />
        </div>
        <div className="row sep-row">
          <div>
            <h6 className="sep-para">
              Making the world a better place one coffee bean at the time!
            </h6>
          </div>
        </div>
        <img src={patterenright} className="sep-rite" alt="" />
      </div>
    </>
  );
};

export default OurSpeacialty;
