import React from "react";
import zrbeans from "../../assests/images/zrbeans.png";
const CoffeeGuarantee = () => {
  return (
    <>
      <div className=" container-fluid beans-wrap">
        <div className=" row  beans-row g-0" >
          <div className="coffe-img col-lg-7 ">
            <img className="zrbeanss" src={zrbeans} alt="" />
          </div>
          <div className="col-lg-5 coffe-desrcp">
            <h4 className="beans-hd">GEGARANTEERD EERLIJKE KOFFIEBONEN</h4>
            <h6 className="beans-para">
              Alle Zwarte Roes koffies zijn traceerbaar tot aan de koffieboer en
              weten exa ct wat zij betaalt krijgen. We make sure everyone
              involved in the production of your coffee is pa yed fairly!
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeGuarantee;
