import React from "react";
import orstory from "../../assests/images/orstory.png";
const OurChange = () => {
  return (
    <>
      <div className="container-fluid about-wrap-comp mb-5">
        <div className="row natural-row">
        <div className="nt-col">
            <img className="cofe-img img-change" src={orstory} alt="" />
          </div>
          <div className="">
            <div className="nt-info bg-change">
              <h4 className="nt-hd">ZWARTE ROES ROASTERY</h4>
              <p className="nt-para">
                {" "}
                Wij branden de hoogste kwaliteit specialty koffiebonen voor
                restaurants, cafes en koffie aficionados.
              </p>
              <p className="nt-para">
                Samen met onze importeurs zoeken wij de mooiste, ongebrande
                koffies ter wereld. Het gaat ons niet alleen om de koffie, maar
                wij zijn ook nieuwsgierig naar de verhalen van de producenten
                die achter deze koffies schuil gaan. Deze koffie branden wij
                vervolgens wekelijks in onze micro-branderij in Hoorn en
                verpakken en verzenden deze dagelijks met liefde.
              </p>
           
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default OurChange;
