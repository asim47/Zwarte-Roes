import React from 'react'
import recyle from "../../assests/images/recyle.png";
import recycleicon from "../../assests/icons/recycleicon.png"
const Recyclable = () => {
  return (
<>

<div className="container-fluid recyle-wrap ">
        <div className="row natural-row">
          <div className="vr-img">
            <img className="cofe-img rec" src={recyle} alt="" />
          </div>
          <div className="info-col">
            <div className="nt-info">
              <img src={recycleicon} className="recycleicon" alt="" />
              <h4 className="nt-hd">100% RECYCLABLE
PACKAGING</h4>

              <p className="nt-para">
                {" "}
                De koffiebonen van Zwarte Roes® worden verpakt in 100% recyclebare verpakkingen!


              </p>
              <p className="nt-para">
              We urge all of our customers to recycle theirs once they drank all the delicious coffee
              </p>
         
            </div>
          </div>
        </div>
      </div>
</>
  )
}

export default Recyclable