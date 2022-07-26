import React from "react";
import shapeoverlay from "../../assests/images/shape-overlay.png";
import { light_blue, yellow } from "../../constants/index";
import { white } from "../../constants/index";
import { Button } from "@mui/material";


const Blends = () => {
  return (
    <>
      <div className="blends-wrap">
        <div className="container-fluid">
          <div className="row blend-row  ">
            <div className="col-lg-5 blend-img">
              <img className="img-blends" src={shapeoverlay} alt="" />
            </div>
            <div className="col-lg-5  blends-info">
              <h4 className="blend-heading">BLENDS</h4>
              <h5 className="blendpara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis.
              </h5>
              <Button
                className="blend-hero"
                style={{
                  backgroundColor: white,
                  textAlign: "center",
                  fontFamily: "Permanent Marker",
                  color: light_blue,
                  width: "8em",
                  height: "2.7em",
                  borderRadius: "45px",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "35px",
                  boxShadow: "0px 15px 10px -9px #909090",
                }}
              >
                SHOP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blends;
