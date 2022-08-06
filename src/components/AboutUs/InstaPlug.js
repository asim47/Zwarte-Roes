import React from "react";
import insta1 from "../../assests/images/insta1.png"
import insta2 from "../../assests/images/insta2.png"
import insta3 from "../../assests/images/insta3.png"
const InstaPlug = () => {
  return (
    <>
      <div className="container-fluid insta-wrap py-4">
        <div className="row justify-content-center">
          <h3 className="insta-hd">Volg ons op @zwarteroes</h3>
        </div>
        <div className="row  justify-content-center">
          <p className="insta-para">
            Post je foto's en stories op Instagram en gebruik <b>#zwarteroes</b>{" "}
            so we can share the love!
          </p>
        </div>
        <div className="row justify-content-center isnta-roll">
          <div className="col-"><img className="insta2"  src={insta1} alt="" /></div>
          <div className="col-"><img className="insta1" src={insta2} alt="" /></div>
          <div className="col-"><img className="insta2" src={insta3} alt="" /></div>
        </div>
      </div>
    </>
  );
};

export default InstaPlug;
