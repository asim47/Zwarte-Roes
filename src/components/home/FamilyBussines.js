import React from "react";
import marven from "../../assests/images/marven.png";
import hearts from "../../assests/icons/hearts.png";
import arrow2 from "../../assests/icons/arrow2.png";
import { Button } from "@mui/material";
import { $dark_brown, yellow, white, orange } from "../../constants/index";
import leftpattern from "../../assests/icons/leftpattern.png";
const FamilyBussines = () => {
  return (
    <>
      <div className="container-fluid fam-con">
        <div className="row fam-row">
          <div className="col-lg-6 col-10 fam-img">
            {" "}
            <img className="hearts" src={hearts} alt="" />
            <img className="marvin" src={marven} alt="" />
          </div>
          <div className="col-lg-5 col-10 ourstory">
            <h4 className="know">DID YOU KNOW?</h4>
            <h4 className="fam-hd">THAT ZWARTE ROES IS A FAMILY BUSINESS</h4>
            <h6 className="fam-para">
              We are Marvin & Eline, world travelers, coffee enthusiasts and
              advocates for ethical trade! We have our own independent roastery
              in the heart of Hoorn and we proudly put a lot of love in every
              single delicious coffee bean we send out! You can read more about
              our story here!
            </h6>
            <div>
              <Button
                className="fam-btn"
                style={{
                  backgroundColor: yellow,
                  textAlign: "center",
                  fontFamily: "Permanent Marker",
                  color: white,
                  width: "10em",
                  height: "2.7em",
                  borderRadius: "45px",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "35px",
                  boxShadow: "0px 15px 10px -9px #909090",
                }}
              >
                OUR STORY
              </Button>
            </div>
            <div>
              <img className="arrows" src={arrow2} alt="" />
            </div>
          </div>
          <div></div>
        </div>
        <img className="lf-decaf" src={leftpattern} alt="" />
      </div>
    </>
  );
};

export default FamilyBussines;
