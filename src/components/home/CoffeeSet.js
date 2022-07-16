import React from "react";
import setcoffe from "../../assests/images/setcoffe.png";
import { Button } from "@mui/material";
import { $dark_brown, dark_brown, white } from "../../constants/index";
const CoffeeSet = () => {
  return (
    <>
      <div className="set-wrap" style={{ backgroundImage: `url(${setcoffe})` }}>
        <div className="container-fluid set-main-con">
          <div className="row set-row">
            <div className="col-lg-5 col-md-8 col-12 set-info">
              <h4 className="set-heading">NOT SURE WHICH FLAVOR TO CHOOSE?</h4>
              <h6 className="set-para">
                Don’t worry, we have the perfect solution for you! You can order
                our taster set and try all kinds of different flavors in one go!
                Save your time and money and find your dream flavor in no time.{" "}
              </h6>
              <div className="set-btns">
                <Button
                  className="set-butn"
                  style={{
                    backgroundColor: white,
                    textAlign: "center",
                    fontFamily: "Permanent Marker",
                    color: dark_brown,
                    width: "10em",
                    height: "2.7em",
                    borderRadius: "45px",
                    fontWeight: 400,
                    fontSize: "24px",
                    lineHeight: "35px",
                    boxShadow: "0px 15px 10px -9px #909090",
                  }}
                >
                  SHOP SETS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeSet;
