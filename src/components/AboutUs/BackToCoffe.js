import React from "react";
import { Button } from "@mui/material";
import { $dark_brown, dark_brown, white, yellow } from "../../constants/index";
import gear1 from "../../assests/images/gear1.png";
const BackToCoffe = () => {
  return (
    <>
      <div className="container-fluid back-wrap">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="gear-hd-ro">BACK TO COFFEE</h4>
            <p className="gear-para-ro">
              Now that you know all about Zwarte Roes it’s time to check out all
              the different coffee flavours we offer in our shop! You can find
              coffee from all over the world. Blends, filter roasts, decafs and
              more. For those of you who can’t decide on your favorite we also
              offer sets that will surely help you find the perfect one for you!
            </p>
            <div className="btn-gear2">
              <Button
                className="back-btn"
                style={{
                  backgroundColor: white,
                  textAlign: "center",
                  fontFamily: "Permanent Marker",
                  color: yellow,
                  width: "9em",
                  height: "2.7em",
                  borderRadius: "45px",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "35px",
                  boxShadow: "0px 15px 10px -9px #909090",
                }}
              >
                SHOP NOW
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

export default BackToCoffe;
