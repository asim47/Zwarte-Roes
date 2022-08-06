import React from "react";
import { Button } from "@mui/material";
import {
  $dark_brown,
  yellow,
  white,
  orange,
  dark_brown,
} from "../../constants/index";
import backtotop from "../../assests/icons/backtotop.png"
const NewsLetter = () => {
  return (
    <>
      <div className="news-wrap">
        <div className="container">
          <div className="new-row ">
            <div className="col-">
              <h4 className="news-heading">KORTING ALARM!!</h4>
              <h6 className="newspara">
                Wanna know when your favorite coffee goes on sale? Subscribe
                today and recieve all of our discount codes, special offers and
                exciting news directly to your inbox!
              </h6>
              <div className="input-group input-order">
                <input
                  type="text"
                  style={{border:'3px solid #DA642A'}}
                  className="form-control news-input "
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <Button
                className="news-btn"
                style={{
                  backgroundColor: orange,
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
SUBSCRIBE
              </Button>
            </div>
          </div>
          <div className="btt">
            <img src={backtotop} alt="" />
            <h6>BACK TO THE TOP

            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
