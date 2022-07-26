import React from "react";
import yelloLine from "../../assests/icons/yelloLine.png";
import rainpattern from "../../assests/icons/rainpattern.png";
const LineCom = () => {
  return (
    <>
      <div className="container-fluid line-con">
        <div className="row">
         <div className="col- line-col">
         <img className="img-line" src={yelloLine} alt="" />
         </div>
        </div>˚
        <img className="rain" src={rainpattern} alt="" />
      </div>
    </>
  );
};

export default LineCom;
