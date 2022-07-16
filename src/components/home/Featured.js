import React from "react";
import delecious from "../../assests/icons/delecious.png";
import nhlogo from "../../assests/icons/nhlogo.png";
import KoffietCacao_logo from "../../assests/icons/KoffietCacao_logo.png"
import blueline1 from "../../assests/icons/blueline1.png";
const Featured = () => {
  return (
    <>
      <div className=" container-fluid ft-con">
        <div className="row ft-row d-flex justify-content-around ">
          <div className="col- ft-name">
            <img src={delecious} alt="" className="ft-logos" />
          </div>
          <div className="col- ft-name">
            <img src={KoffietCacao_logo} alt="" className="ft-logos" />
          </div>
          <div className="col- ft-name">
            <img src={nhlogo} alt="" className="nh-logo" />
          </div>
        </div>
        <div className="blue-line">
            <img src={blueline1} alt="" className="blu-img" />

        </div>
      </div>
    </>
  );
};

export default Featured;
