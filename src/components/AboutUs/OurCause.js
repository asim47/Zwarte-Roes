import React from 'react'
import ourcause from "../../assests/images/ourcause.png"
import  heart1 from "../../assests/icons/heart1.png"
const OurCause = () => {
  return (
<>
<div className="container-fluid ourcause-wrap" style={{
  backgroundImage:`url(${ourcause})`
}}>
<div className="row cause-row">
  <div className="col-">
    <h4 className="cause-hd">NUMBER OF PEOPLE SUPPORTING OUR CAUSE</h4>
  </div>

</div>
<div className="row cause-row">
<div className="col-lg-11 col- d-flex cause-col ">
            <div className="box cause-box b-1">
              <h4 className="box-no">1</h4>{" "}
            </div>
            <div className="box b-1">
              <h4 className="box-no">0</h4>{" "}
            </div>
            <div className="box b-1 ">
              <h4 className="box-no">8</h4>{" "}
            </div>
            <div className="box b-1">
              <h4 className="box-no">3</h4>{" "}
            </div>
            <div className="box b-1">
              <h4 className="box-no">5</h4>{" "}
            </div>
            <div className="box heart-b">
<img src={heart1} className="herat-cause" alt="" />
            </div>
          </div>
</div>
</div>
</>
  )
}

export default OurCause