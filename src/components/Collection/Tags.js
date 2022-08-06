import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import SingleOriginCo from "./SingleOriginCo";
import All from "./AllCo";
const Tags = (props) => {
  const [age, setAge] = useState("");

  return (
    <>
      <div className="container-fluid  d-flex justify-content-center ">
        <div className="row tags-wrap">
          <div className="col-  ">
            {" "}
            <div className="borderT d-flex align-items-center ">
              <span onClick={props.AllHandler} className="tagName">
                all
              </span>
            </div>
          </div>
          <div className="col-">
            <div className="borderT">
              <span className="tagName">blends</span>
            </div>
          </div>
          <div className="col-">
            <div className="borderT">
              <span className="tagName" className="tagName">
                FILTER
              </span>
            </div>
          </div>
          <div className="col-">
            <div className="borderT">
              <span className="tagName">FILTER SPECIAL</span>
            </div>
          </div>
          <div className="col-">
            <div className="borderT">
              <span className="tagName">ESPRESSO</span>
            </div>
          </div>
          <div className="col-">
            <div className="borderT">
              <span className="tagName">ORGANIC</span>
            </div>
          </div>
          <div className="col-">
            <div className="borderT">
              <span className="tagName">DECAF</span>
            </div>
          </div>
          <div className="col-">
            <div className="borderT">
              <span className="tagName">PROEFPAKKETTEN</span>
            </div>
          </div>
          <div className="col-">
            <div className="borderT">
              <span onClick={props.SingleoriginHandler} className="tagName">
                {" "}
                SINGLE ORIGIN
              </span>
            </div>
          </div>
          <div className="col-">
            <div className="borderT">
              <span className="tagName">GIFTS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="row d-flex selc-wrap">
          <div className="col-">
            <span className="region">Regio:</span>
            <select
              className="selc-options"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              label="All"
            >
              <option className="opt" value="All">
                All
              </option>
              <option className="opt" value={10}>
                some
              </option>
              <option className="opt" value={20}>
                Coffee
              </option>
              <option className="opt" value={30}>
                latte SPECIAL
              </option>
            </select>
          </div>
          <div className="col-">
            <span className="region">Smaakprofiel:</span>
            <select
              className="selc-options"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              label="All"
            >
              <option className="opt" value="All">
                All
              </option>
              <option className="opt" value={10}>
                some
              </option>
              <option className="opt" value={20}>
                Twenty
              </option>
              <option className="opt" value={30}>
                Thirty
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tags;
