import React from "react";
import { Button } from "@mui/material";
import { $dark_brown, dark_brown, white } from "../../constants/index";
import gear1 from "../../assests/images/gear1.png";

const CoffeGear2 = () => {
  return (
    <>
      <div className="container-fluid gear-wrap2">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="gear-hd-ro">I NEED COFFEE GEAR</h4>
            <p className="gear-para-ro">
              Here you can check out our wide range of coffee making tools.
              Whether you are a proffesional barista or a fellow coffee
              enthusiast, we’ve got you covered! In our shop you can find coffee
              machines, pour over tools, filters, grinders and everything else
              you might need to help you get to that perfect cup.
            </p>
            <div className="btn-gear2">
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
          <div className="col-lg-4">
            <div className="imag-border">
              <img className="img-gear" src={gear1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeGear2;
