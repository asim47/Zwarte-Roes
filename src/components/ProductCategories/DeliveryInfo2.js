import React from "react";
import gift2 from "../../assests/icons/gift2.png";
import Delivery from "../../assests/icons/Delivery.png";
import patterRight from "../../assests/icons/patterRight.png";
import line3 from "../../assests/icons/line3.png";
const DeliveryInfo2 = () => {
  return (
    <>
      <div className="container-fluid delver-wrap-2">
        <div className="d-flex row justify-content-center gift-wrap dilveryinfo3">
          <div class="col-lg-4 col-md-8 col-10 gify-info gift-i2 text-center ">
            <img className="g-img" src={gift2} alt="" />
            <h6 className="gift-des gd-2">Gratis Verzending </h6>
            <h5 className="gift-des gd-2">vanaf € 35y</h5>
          </div>
          <div className="col-">
            {" "}
            <img className="line-1 line2" src={line3} alt="" />{" "}
          </div>
          <div class="col-lg-4 col-md-8 col-10 del-info d-info1 text-center">
            {" "}
            <img src={Delivery} className="g-img" alt="" />
            <h6 className="gift-des gd-2">Voor 15.00 uUR besteld - zelfde </h6>
            <h5 className="gift-des gd-2">werkdag verstuurd!</h5>
          </div>
        </div>
        <img className="del-pat-2" src={patterRight} alt="" />
      </div>
    </>
  );
};

export default DeliveryInfo2;
