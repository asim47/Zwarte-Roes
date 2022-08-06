import React from "react";
import vers from "../../assests/images/grains.png";

const VersGer = () => {
  return (
    <>
      <div className="container-fluid vers-wrap ">
        <div className="row natural-row">
          <div className="info-col">
            <div className="nt-info vers">
              <h4 className="nt-hd">VERS GEBRAND</h4>

              <p className="nt-para">
                {" "}
                Al onze koffiebonen zijn altijd vers gebrand!
              </p>
              <p className="nt-para">
                Wij branden ongeveer 2 tot 3 keer per week, en omdat we
                kleinschalig zijn houdt dit in dat we nooit een grotere voorraad
                gebrande koffiebonen hebben dan van een week geleden. Zo kun je
                veilig je koffiebonen online kopen en weet je dat de koffie
                meestal maar enkele dagen geleden is gebrand. Zo heb je altijd
                de meest verse koffiebonen in huis!
              </p>
              <p className="nt-para">
                Zo kun je veilig je koffiebonen online kopen en weet je dat de
                koffie meestal maar enkele dagen geleden is gebrand. Zo heb je
                altijd de meest verse koffiebonen in huis!
              </p>
            </div>
          </div>
          <div className="vr-img">
            <img className="cofe-img" src={vers} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default VersGer;
