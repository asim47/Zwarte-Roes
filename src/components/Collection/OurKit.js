import React from "react";
import kit1 from "../../assests/icons/kit1.png";
import kit2 from "../../assests/icons/kit2.png";
import kit3 from "../../assests/icons/kit3.png";
import kit4 from "../../assests/icons/kit4.png";
import kit8 from "../../assests/icons/kit8.png";

const OurKit = () => {
  return (
    <>
      <div className="container ">
        <div className="row kit-wrap">
          <div className="col-">
            {" "}
            <img src={kit1} alt="" />{" "}
          </div>
          <div className="col-">
            {" "}
            <img src={kit2} alt="" />{" "}
          </div>
          <div className="col-">
            {" "}
            <img src={kit3} alt="" />{" "}
          </div>
          <div className="col-">
            {" "}
            <img src={kit4} alt="" />{" "}
          </div>
          <div className="col- kit-5">
            {" "}
            <img src={kit8} alt="" />{" "}
          </div>
        </div>
        <div className="kit-hd">
          <h4 className="kit-head">Geschikt voor elke zetmethode</h4>
          <p className="kit-para">
            Onze koffiebonen worden gebrand voor iedere zetmethode. Wij maken
            het onderscheid tussen koffiebonen gebrand voor espresso en koffies
            met melk. Onze lichter gebrande koffiebonen zijn beter geschikt voor
            diverse opschenk methodes. Twijfel je welke koffiebonen je moet
            hebben voor jouw gewenste zetmethode? Bij iedere Origine of Blend
            staat vermeld hoe je de koffie het beste kunt zetten.
          </p>
        </div>
      </div>
    </>
  );
};

export default OurKit;
