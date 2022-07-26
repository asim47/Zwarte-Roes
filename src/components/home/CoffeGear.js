import React from "react";
import { Button } from "@mui/material";
import { $dark_brown, dark_brown, white } from "../../constants/index";
import gear1 from "../../assests/images/gear1.png";
import tool1 from "../../assests/icons/tool1.png";
import tool2 from "../../assests/icons/tool2.png";
import tool3 from "../../assests/icons/tool3.png";
import tool4 from "../../assests/icons/tool4.png";
import tool5 from "../../assests/icons/tool5.png";
const CoffeGear = () => {
  return (
    <>
      <div className="gear-wrap">
        <div className="container-fluid">
          <div className="row gear-row">
            <div className="col-lg-5  ">
              <div className="imag-border">
                <img className="img-gear" src={gear1} alt="" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="gear-info-wrap">
                <h4 className="gear-hd">BETTER GEAR </h4>
                <h4 className="geareq">= </h4>
                <h4 className="gear-hd">BETTER GEAR </h4>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row gear-list">
              <div className="col-">
                {" "}
                <img src={tool1} alt="" />{" "}
              </div>
              <div className="col-">
                <img src={tool2} alt="" />
              </div>
              <div className="col-">
                <img src={tool3} alt="" />
              </div>
              <div className="col-">
                <img src={tool4} alt="" />
              </div>
              <div className="col-">
                <img src={tool5} alt="" />
              </div>
            </div>
            <div className="btn-gear">
              <Button
                className="gear-btn"
                style={{
                  backgroundColor: white,
                  textAlign: "center",
                  fontFamily: "Permanent Marker",
                  color: dark_brown,
                  width: "13em",
                  height: "2.7em",
                  borderRadius: "45px",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "35px",
                  boxShadow: "0px 15px 10px -9px #909090",
                }}
              >
                SHOP COFFEE GEAR
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeGear;
