import React from "react";
import { Button } from "@mui/material";
import theymatter from "../../assests/images/theymatter.png";
import pattern from "../../assests/icons/pattern.png";
import { yellow } from "../../constants/index";
import { white } from "../../constants/index";
import { light_blue } from "../../constants/index";
const TheyMatter = () => {
  return (
    <>
      <div className="container-fluid matter-wrap  ">
        <div className="row justify-content-around d-flex">
          <div className="col-lg-6 col-md-10  ">
            <img src={theymatter} alt="" className="thymt-img" />
          </div>
          <div className="col-lg-6 col-md-8 col-12">
            <h4 className="matter-heading">
              START GIVING A SH*T AND DRINK GOOD COFFEE
            </h4>
            <h5 className="matterpara">
              Hoe beter de werkomstandigheden, hoe gelukkiger onze partners
              zijn. Gelukkige partners zorgen voor een radicaal beter
              eindproduct waar liefde en passie in zit. En dat proef je.
              Vertrouwen in de toekomst. Stay mindful and be the part of the
              change for the better.
            </h5>
            <Button
              className="btn-matter"
              style={{
                backgroundColor: light_blue,
                textAlign: "center",
                fontFamily: "Permanent Marker",
                color: white,
                width: "249px",
                height: "70px",
                borderRadius: "45px",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "35px",
                boxShadow: "0px 15px 10px -9px #909090",
              }}
            >
              tell me more
            </Button>
          </div>
          <div className="gld-img-wrap">
            <img src={pattern} alt="" className="goldPattern" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TheyMatter;
