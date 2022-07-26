import React from "react";
import Megaphone_2 from "../../assests/icons/Megaphone_2.png";
import speaker from "../../assests/icons/speaker.png";

const AnnouncementBar = () => {
  return (
    <div className="container-fluid">
      <div className="row coco d-flex  justify-content-center  ">
        <div className="col- d-flex  slogan ">
          <div>
            <img src={Megaphone_2} />
          </div>
          <h5 className="bar-slogan">Gratis Verzending vanaf € 35</h5>
          <div>
            <img src={speaker} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
