import React from "react";
import shapeoverlay3 from "../../assests/images/shape3-overlay.png";
import { light_blue, orange } from "../../constants/index";
import { white } from "../../constants/index";
import { Button } from "@mui/material";
const SingleOrigin = () => {
  return (
    <>
      <div className="origin-wrap">
        <div className="container-fluid">
          <div className="row origin-row  ">
            <div className="col-lg-5 blend-img">
              <img className="img-blends" src={shapeoverlay3} alt="" />
            </div>
            <div className="col-lg-5  blends-info">
              <h4 className="blend-heading">SINGLE ORIGIN</h4>
              <h5 className="blendpara">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non.
              </h5>
              <Button
                className="`origin-btn`"
                style={{
                  backgroundColor: white,
                  textAlign: "center",
                  fontFamily: "Permanent Marker",
                  color: orange,
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

export default SingleOrigin;
