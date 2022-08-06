import React from "react";
import coffeshot from "../../assests/images/coffeshot.png";
const Natural = () => {
  return (
    <>
      <div className="container-fluid natural-wrap">
        <div className="row natural-row">
          <div className="nt-col">
            <img className="cofe-img" src={coffeshot} alt="" />
          </div>
          <div className="">
            <div className="nt-info">
              <h4 className="nt-hd">100% NATURAL</h4>
              <p className="nt-para">
                Zwarte Roes® koffiebonen zijn 100% natuurlijk en vrij van
                (kunstmatige) smaak en geurstoffen. 
              </p>
              <p className="nt-para">Ook bevatten de koffiebonen
                geen noten of chocolade. Smaaktonen die vermeld staan op het
                label zijn niet toegevoegd aan de koffiebonen. Dit zijn smaken
                die je van nature kunt terugvinden bij een goede zetting. Puur
                natuur dus!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Natural;
