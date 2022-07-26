import React from "react";
import ordercoffe from "../../assests/images/ordercoffe.png";
import { Button } from "@mui/material";
import {
  $dark_brown,
  yellow,
  white,
  orange,
  dark_brown,
} from "../../constants/index";
const Announcement = () => {
  return (
    <>
      <div className="announce-wrap">
        <div className="container-fluid announce-comp">
          <div className="row order-row ">
            <div className="col-lg-6 col- order-bg ">
              <h4 className="order-hd">
                IMAGINE NEVER RUNNING OUT OF COFFEE AGAIN
              </h4>

              <h6 className="orderpara">
                Whether you’re working from home, have a sweet daily routine or
                just want to make your life easier, this is for you. You can
                take one task off of your busy schedule by subscribing here and
                receive your favourite Zwarte Roes flavor to your door every
                week!
              </h6>
              <div>
                <Button
                  className="order-btn"
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
                  ABONNEMENT
                </Button>
              </div>
            </div>
            <div className="col-lg-5 col-">
              <img className="order-img" src={ordercoffe} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcement;
