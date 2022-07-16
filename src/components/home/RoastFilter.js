import React from "react";
import shapeoverlay2 from "../../assests/images/shape2-overlay.png";
import { light_blue, yellow } from "../../constants/index";
import { white } from "../../constants/index";
import { Button } from "@mui/material";
const RoastFilter = () => {
  return (
    <>
      <div className="roast-wrap">
        <div className="container-fluid">
          <div className="row roast-row  ">
            <div className="col-lg-5  roast-info">
              <h4 className="blend-heading">FILTER ROASTS</h4>
              <h5 className="blendpara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis nostrud.
              </h5>
              <Button
                className="roast-btn"
                style={{
                  backgroundColor: white,
                  textAlign: "center",
                  fontFamily: "Permanent Marker",
                  color: yellow,
                  width: "8em",
                  height: "2.7em",
                  borderRadius: "45px",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "35px",
                  boxShadow: "0px 15px 10px -9px #909090",
                }}
              >
                SHOP Now
              </Button>
            </div>
            <div className="col-lg-5 col-5 roast-img">
              <img className="img-roast" src={shapeoverlay2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoastFilter;
