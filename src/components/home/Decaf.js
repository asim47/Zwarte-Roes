import React from "react";
import shapdecaf from "../../assests/images/decaf-overlay.png";
import leftpattern from "../../assests/icons/leftpattern.png";
import { light_blue, yellow, orange } from "../../constants/index";
import { white } from "../../constants/index";
import { Button } from "@mui/material";
const Decaf = (props) => {
  return (
    <>
      <div className="Decaf-wrap">
        <div className="container-fluid">
          <div className="row decaf-row  ">
            <div className="col-lg-5  decaf-info">
              <h4 className="decaf-heading">
                COFFEE KEEPS YOU UP? WE GOT YOU COVERED!
              </h4>
              <h5 className="decafpara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam quis nostrud.
              </h5>
              <Button
                className="decaf-btn"
                style={{
                  backgroundColor: orange,
                  textAlign: "center",
                  fontFamily: "Permanent Marker",
                  color: white,
                  width: "9em",
                  height: "2.7em",
                  borderRadius: "45px",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "35px",
                  boxShadow: "0px 15px 10px -9px #909090",
                }}
              >
SHOP DECAF
              </Button>
            </div>
            <div className="col-lg-5 col-5 decaf-img">
              <img className="img-roast" src={shapdecaf} alt="" />
            </div>
          </div>
        </div>
        <img className={props.lineNone || "lf-decaf"} src={leftpattern} alt="" />
      </div>
    </>
  );
};

export default Decaf;
