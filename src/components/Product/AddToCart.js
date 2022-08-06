import React, { useState } from "react";
import singlepro from "../../assests/images/singlepro1.png";
import sub from "../../assests/icons/sub.png";
import Stars2 from "../../assests/icons/Stars2.png";
import Add from "../../assests/icons/Add.png";
import line6 from "../../assests/icons/line6.png";
import underlinecrt from "../../assests/icons/underlinecrt.png";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { light_blue, yellow } from "../../constants/index";
import { white } from "../../constants/index";
import { Button, Link } from "@mui/material";
import AiOutlineLine from "react-icons/ai";
const AddToCart = () => {
  const [age, setAge] = useState("koffiebonen");
  const [gram, setgram] = useState("250g");
  const [counter, setcounter] = useState(1);
  const [ZETADVIES, setZETADVIES] = useState("ZETADVIES");
  const [VERZENDING, setVERZENDING] = useState("VERZENDING");
  const [HOUDBAAR, setHOUDBAAR] = useState("HOUDBAAR TOT");
  const handleChange = (e) => {
    setAge(e.target.value);
  };
  const handleGram = (e) => {
    setgram(e.target.value);
  };
  return (
    <>
      <div className="container-fluid addcrt-wrap ">
        <div className="row cart-row">
          <div className="col-lg- col-">
            <img src={singlepro} className="addcrt-img" alt="" />
          </div>
          <div className="col-lg- col- addcart-info ">
            <div className="ratings pb-3">
              {" "}
              <img src={Stars2} className="rt-strs" alt="" />{" "}
              <span className="reviw-crt"> (213 reviews)</span>
            </div>
            <h4 className="coffe-name-crt">BRASIL CAPRICORNIO</h4>
            <div className="mt-3">
              <h6 className="tag-cart-li">
                hazelnut • black cherry • milk chocolate
              </h6>
              <img className="line" src={underlinecrt} alt="" />
            </div>
            <div>
              {" "}
              <span className="pricecrt">€7,50</span>
            </div>

            <FormControl variant="filled" className="form-select">
              <Select
                className="coffe-sleect"
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem classname="menu-crt" value={"koffiebonen"}>
                  <span
                    style={{
                      fontSize: "24px",
                      fontFamily: "Quicksand",
                      letterSpacing: "0.005em",
                    }}
                  >
                    koffiebonen
                  </span>
                </MenuItem>
                <MenuItem value="Coffee powdered">
                  {" "}
                  <span
                    style={{
                      fontSize: "24px",
                      fontFamily: "Quicksand",
                      letterSpacing: "0.005em",
                    }}
                  >
                    Coffee Powdered
                  </span>
                </MenuItem>
                <MenuItem value="Instant">
                  <span
                    style={{
                      fontSize: "24px",
                      fontFamily: "Quicksand",
                      letterSpacing: "0.005em",
                    }}
                  >
                    {" "}
                    InsTant{" "}
                  </span>
                </MenuItem>
              </Select>
            </FormControl>
            <div>
              {" "}
              <FormControl variant="filled" className="form-select">
                <Select
                  className="coffe-sleect"
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={gram}
                  onChange={handleGram}
                >
                  <MenuItem classname="menu-crt" value={"250g"}>
                    <span
                      style={{
                        fontSize: "24px",
                        fontFamily: "Quicksand",
                        letterSpacing: "0.005em",
                      }}
                    >
                      250g
                    </span>
                  </MenuItem>
                  <MenuItem value="550g">
                    {" "}
                    <span
                      style={{
                        fontSize: "24px",
                        fontFamily: "Quicksand",
                        letterSpacing: "0.005em",
                      }}
                    >
                      550g
                    </span>
                  </MenuItem>
                  <MenuItem value="1000g">
                    <span
                      style={{
                        fontSize: "24px",
                        fontFamily: "Quicksand",
                        letterSpacing: "0.005em",
                      }}
                    >
                      {" "}
                      1000g
                    </span>
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="counter">
              <span className="minus" onClick={() => setcounter(counter - 1)}>
                <img src={sub} alt="" />
              </span>{" "}
              <span className="count-no">{counter}</span>
              <span onClick={() => setcounter(counter + 2)}>
                <img className="plus" src={Add} alt="" />
              </span>
              <div>
                {" "}
                <img src={line6} className="pl-1" alt="" />
              </div>
            </div>
            <ul className="list-crt-1">
              <li>Gratis Verzending vanaf € 35 Voor</li>
              <li>15.00 uur besteld zelfde dag verzonden!</li>
            </ul>
            <div>
              {" "}
              <Button
                href="/collection"
                className="addcart-btn"
                style={{
                  marginBlock: "1em",
                  backgroundColor: yellow,
                  textAlign: "center",
                  fontFamily: "Quicksand",
                  color: white,
                  width: "600px",
                  height: "88px",
                  borderRadius: "5px",
                  fontWeight: 700,
                  fontSize: "32px",
                  lineHeight: "35px",
                  boxShadow: "0px 15px 10px -9px #909090",
                }}
              >
                Add to cart
              </Button>
            </div>
            <img src={underlinecrt} className="line" alt="" />
            <ul
              className="list-crt-1"
              style={{
                marginBlock: "3em",
              }}
            >
              <li>Pick up available at Shop & Brewbar Center</li>
              <li>Usually ready in 24 hours</li>
              <li>Check availability at other stores</li>
            </ul>
            <div className="crt-para">
              <p className="ad-crt-para">
                You like it classy? Deze Braziliaanse is een waar genot voor de
                klassieke espresso drinker, maar dan zonder de bittere nasmaak.
                Vol, zoet en romig in de afdronk. Drink'm mét of zonder melk,
                hij is gewoon echt super lekker.
              </p>
            </div>
            <div>
              <li className="link-cart">Meer info over Brasil Capricornio</li>
            </div>
            <FormControl variant="filled" className="form-select">
              <Select
                className="coffe-sleect"
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={VERZENDING}
                onChange={(e) => setVERZENDING(e.target.value)}
              >
                <MenuItem classname="menu-crt" value={"VERZENDING"}>
                  <span
                    style={{
                      fontSize: "24px",
                      fontFamily: "Quicksand",
                      letterSpacing: "0.005em",
                    }}
                  >
                    VERZENDING
                  </span>
                </MenuItem>
                <MenuItem value="Coffee powdered">
                  {" "}
                  <span
                    style={{
                      fontSize: "24px",
                      fontFamily: "Quicksand",
                      letterSpacing: "0.005em",
                    }}
                  >
                    Coffee Powdered
                  </span>
                </MenuItem>
                <MenuItem value="Instant">
                  <span
                    style={{
                      fontSize: "24px",
                      fontFamily: "Quicksand",
                      letterSpacing: "0.005em",
                    }}
                  >
                    {" "}
                    InsTant{" "}
                  </span>
                </MenuItem>
              </Select>
            </FormControl>
            <div>
              <FormControl variant="filled" className="form-select">
                <Select
                  className="coffe-sleect"
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={ZETADVIES}
                  onChange={(e) => setZETADVIES(e.target.value)}
                >
                  <MenuItem classname="menu-crt" value={"ZETADVIES"}>
                    <span
                      style={{
                        fontSize: "24px",
                        fontFamily: "Quicksand",
                        letterSpacing: "0.005em",
                      }}
                    >
                      ZETADVIES
                    </span>
                  </MenuItem>
                  <MenuItem value="Coffee powdered">
                    {" "}
                    <span
                      style={{
                        fontSize: "24px",
                        fontFamily: "Quicksand",
                        letterSpacing: "0.005em",
                      }}
                    >
                      Coffee Powdered
                    </span>
                  </MenuItem>
                  <MenuItem value="Instant">
                    <span
                      style={{
                        fontSize: "24px",
                        fontFamily: "Quicksand",
                        letterSpacing: "0.005em",
                      }}
                    >
                      {" "}
                      InsTant{" "}
                    </span>
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl variant="filled" className="form-select">
                <Select
                  className="coffe-sleect"
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={HOUDBAAR}
                  onChange={(e) => setHOUDBAAR(e.target.value)}
                >
                  <MenuItem classname="menu-crt" value={"HOUDBAAR TOT"}>
                    <span
                      style={{
                        fontSize: "24px",
                        fontFamily: "Quicksand",
                        letterSpacing: "0.005em",
                      }}
                    >
                      HOUDBAAR TOT
                    </span>
                  </MenuItem>
                  <MenuItem value="Coffee powdered">
                    {" "}
                    <span
                      style={{
                        fontSize: "24px",
                        fontFamily: "Quicksand",
                        letterSpacing: "0.005em",
                      }}
                    >
                      Coffee Powdered
                    </span>
                  </MenuItem>
                  <MenuItem value="Instant">
                    <span
                      style={{
                        fontSize: "24px",
                        fontFamily: "Quicksand",
                        letterSpacing: "0.005em",
                      }}
                    >
                      {" "}
                      InsTant{" "}
                    </span>
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
