import React from "react";
import travelOption from "../../assests/icons/travelOption.png";
import beanoption from "../../assests/icons/beanoption.png";
import proLine from "../../assests/icons/proLine.png";
import { yellow, white, orange } from "../../constants/index";
import patterRight from "../../assests/icons/patterRight.png";
import { Button } from "@mui/material";
const Options = () => {
  return (
    <>
      <div className="container-fluid opt-wrap">
        <div className="heading-opt">
          {" "}
          <h4 className="option-hd">WHICH TYPE DO YOU WANT TO TRY FIRST?</h4>
        </div>
        <div className="coffe-options row ">
          <div className="beans-options col-">
            <img className="img-b" src={beanoption} alt="" />
            <h4 className="b-opt">I WANT TO SEE MY OPTIONS</h4>
            <Button
              className="bean-opt"
              style={{
                backgroundColor: white,
                textAlign: "center",
                fontFamily: "Permanent Marker",
                color: yellow,
                width: "276px",
                height: "2.7em",
                borderRadius: "45px",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "35px",
                boxShadow: "0px 15px 10px -9px #909090",
              }}
            >
              SCROLL DOWN
            </Button>
          </div>
          <div className="col- middle-line">
            {" "}
            <img src={proLine} alt="" />
          </div>
          <div className="travel-options col-">
            <img className="img-b" src={travelOption} alt="" />
            <h4 className=" travel-hd">I FEEL ADVENTUROUS!</h4>
            <Button
              className="travel-opt"
              style={{
                backgroundColor: white,
                textAlign: "center",
                fontFamily: "Permanent Marker",
                color: orange,
                width: "276px",
                height: "2.7em",
                borderRadius: "45px",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "35px",
                boxShadow: "0px 15px 10px -9px #909090",
              }}
            >
              CHOOSE FOR ME
            </Button>
          </div>
        </div>
        <div className="">
          <img className="pattern-opt" src={patterRight} alt="" />
        </div>
      </div>
    </>
  );
};

export default Options;
