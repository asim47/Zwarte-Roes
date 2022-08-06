import React from 'react'
import roatesry from "../../assests/images/roatesry.png";


const RoesRoastary = () => {
  return (
<>


<div className="container-fluid about-wrap-comp">
        <div className="row natural-row">
          <div className="">
            <div className="nt-info bg-roastary">
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
          <div className="nt-col">
            <img className="cofe-img img-change" src={roatesry} alt="" />
          </div>
        </div>
      </div></>
  )
}

export default RoesRoastary