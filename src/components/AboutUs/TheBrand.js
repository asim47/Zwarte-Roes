import React from "react";
import marven1 from "../../assests/images/marven1.png";
const TheBrand = () => {
  return (
    <>
      <div className="container-fluid about-wrap-comp">
        <div className="row natural-row">
          <div className="nt-col">
            <img className="cofe-img img-brand" src={marven1} alt="" />
          </div>
          <div className="">
            <div className="nt-info bg-brand">
              <h4 className="nt-hd">BEHIND THE BRAND</h4>
              <p className="nt-para">
                Hoi! We are Marvin & Eline, coffee enthusiasts and advocates for
                ethical trade first, the founders of Zwarte Roes second! The
                story of our brand began with learning about the unfair wages
                the coffee farmers usually get for the tremendous amount of
                physical labor they put into harvesting the coffee beans. We
                took matters into our own hands to right this wrong and
                established an ethical coffee brand that can do both, source
                incredibly delicious coffee and make sure the farmers get payed
                fairly!
              </p>
<div className="sig-brnd">
<h4 className="sig">Marvin $ Eline</h4>

</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TheBrand;
