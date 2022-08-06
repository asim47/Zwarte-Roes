import React from "react";

const QuantitySoFar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row kilos-row">
          <div className="col-lg-4 col-">
            <h4 className="kilos">
              KILOS OF ETHICALLY SOURCED COFFEE BEANS SO FAR
            </h4>
          </div>
          <div className="col-lg-7 col- d-flex">
            <div className="box">
              <h4 className="box-no">2</h4>{" "}
            </div>
            <div className="box">
              <h4 className="box-no">4</h4>{" "}
            </div>
            <div className="box">
              <h4 className="box-no">5</h4>{" "}
            </div>
            <div className="box">
              <h4 className="box-no">6</h4>{" "}
            </div>
            <div className="box">
              <h4 className="box-no">0</h4>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuantitySoFar;
