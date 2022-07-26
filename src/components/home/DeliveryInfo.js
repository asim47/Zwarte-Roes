import React from "react";
import gift from "../../assests/icons/gift.png";
import dilvery from "../../assests/icons/dilvery.png";
import patterenleft from "../../assests/icons/patteren-left.png";
import line from "../../assests/icons/line2.png";
const DeliveryInfo = () => {
  return (
    <>
      <div className="container-fluid" >
        <div className="d-flex row justify-content-center gift-wrap">
          <div class="col-lg-4 col-md-8 col-10 gify-info text-center ">
            <img className="g-img" src={gift} alt="" />
            <h6 className="gift-des">Gratis Verzending </h6>
            <h5 className="gift-des">vanaf € 35y</h5>
          </div>
          <div className="col-">
            {" "}
            <img className="line-1" src={line} alt="" />{" "}
          </div>
          <div class="col-lg-4 col-md-8 col-10 del-info text-center">
            {" "}
            <img src={dilvery} className="g-img" alt="" />
            <h6 className="gift-des">Voor 15.00 uUR besteld - zelfde </h6>
            <h5 className="gift-des">werkdag verstuurd!</h5>
          </div>
        </div>
        <img className="pattern-left" src={patterenleft} alt="" />
      </div>
    </>
  );
};

export default DeliveryInfo;
