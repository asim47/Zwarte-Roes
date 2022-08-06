import React from "react";
import { Button } from "@mui/material";
import theymatter from "../../assests/images/theymatter.png";
import pattern from "../../assests/icons/pattern.png";
import { yellow } from "../../constants/index";
import { white } from "../../constants/index";
import { light_blue } from "../../constants/index";
const Change = () => {
  return (
    <>
      <div className="container-fluid change-wrap ">
        <div className="row justify-content-around d-flex chnage-row">
          <div className="col-lg-6 col-md-10  ">
            <img src={theymatter} alt="" className="thymt-img" />
          </div>
          <div className="col-lg-6 col-md-8 col-12">
            <h4 className=" change-hd">BE A PART OF THE CHANGE</h4>
            <h5 className="change-para ">
              Zwarte Roes coffee is future proof! We are on a mission to spread
              awareness about the importance of fair wages. Every day we are
              getting more people to be mindful of where exactly their money is
              going and with that, what exactly they are supporting. By
              purchasing Zwarte Roes coffee you are joining our cause to make
              the world a better place one coffee bean at a time!
            </h5>
            <Button
              className="btn-change"
              style={{
                backgroundColor: white,
                textAlign: "center",
                fontFamily: "Permanent Marker",
                color: yellow,
                width: "207px",
                height: "70px",
                borderRadius: "45px",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "35px",
                boxShadow: "0px 15px 10px -9px #909090",
              }}
            >
READ MORE
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Change;
