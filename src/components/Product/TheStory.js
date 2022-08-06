import React from "react";
import story1 from "../../assests/images/story1.png";
import story2 from "../../assests/images/story2.png";
import story3 from "../../assests/images/story3.png";
import patterenleft from "../../assests/icons/patteren-left.png";
import patterenright from "../../assests/icons/pattern.png";
import worldmap from "../../assests/icons/worldmap.png";
const TheStory = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row st-pic-row">
          <div className="col- ">
            {" "}
            <img className="st-pic" src={story1} alt="" />{" "}
          </div>
          <div className="col-">
            <img className="st-pic" src={story2} alt="" />{" "}
          </div>
          <div className="col-">
            <img className="st-pic" src={story3} alt="" />{" "}
          </div>
        </div>
        <div>
          <img className="left-st" src={patterenleft} alt="" />
        </div>
      </div>

      <div className="container">
        <div className="row st-info">
          <div className="col-">
            <h4 className="st-hd">The story</h4>
            <p className="st-para">
              Bij ons is het volledige assortiment 100% Specialty Coffee
              kwaliteit. Dit houdt in dat onze koffiebonen naast het feit dat ze
              100% Arabica zijn, voldoen aan de hoogste standaard binnen
              koffiewereld. Koffiebonen om echt 100% van te genieten. Daarnaast
              brengt Specialty Coffee een ander voordeel met zich mee. 
            </p>
            <p className="st-para">Door het
              drinken van deze future-proof koffie draag jij je steentje bij aan
              het verbeteren van de leefomstandigheden van de koffieproducenten
              en hun kinderen.</p>
          </div>
          <div className="col-12">
            <img className="worldmp" src={worldmap} alt="" />
          </div>
          <p className="fullst">Read the full story here</p>
        </div>
        <div>

          <img className="right-st" src={patterenright} alt="" />
        </div>
      </div>
    </>
  );
};

export default TheStory;
