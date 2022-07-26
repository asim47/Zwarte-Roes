import React from 'react'
import { Button } from "@mui/material";
import product from "../../assests/images/product.png";
import Stars from "../../assests/icons/Stars.png";
import Starstrans from "../../assests/icons/Starstrans.png";
import CORNERTAGORG from "../../assests/icons/CORNERTAGORG.png";
import CORNERTAGNEW from "../../assests/icons/CORNERTAGNEW.png";
import CORNERTAGSALE from "../../assests/icons/CORNERTAGSALE.png";
import redline from "../../assests/icons/redline.png";
import { yellow, white, orange } from "../../constants/index";

import { FiChevronRight } from "react-icons/fi";
const AllCo = () => {
  return (
<>

<div className="container-fluid">
        <div className="tag-heading">
          <h4 className="so-hd">ALLE KOFFIEBONEN</h4>
          <h6 className="so-para">
            Onze vers gebrande koffiebonen worden zorgvuldig geselecteerd,
            gebrand op bestelling en verpakt met liefde. Zo maken wij
            koffiebonen online bestellen veilig, makkelijk en snel.
          </h6>
        </div>
      </div>
      <div className="container-fluid card-wraps">
        <div className="row cards-row ">
          <div className="col- coffe-card ">
            <div
              style={{
                backgroundImage: `url(${product})`,
                height: "384px",
                width: "300px",
              }}
            ></div>
            <h6 className="coffeNam">BRASIL CAPRICORNIO</h6>
            <h3 className="liltags">chocolate • almond • caramel</h3>

            <img className="stars-row" src={Stars} alt="" />
            <p className="price">v.a. €7,50</p>
            <Button
              className="cards-btn"
              style={{
                backgroundColor: yellow,
                textAlign: "center",
                textTransform: "lowercase",
                fontFamily: "Quicksand",
                color: white,
                width: "10em",
                height: "2.7em",
                borderRadius: "45px",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "35px",
              }}
            >
              show options
            </Button>
          </div>
          <div className="col- pop-card ">
            <h4 className="pop-hd">MOST POPULAR THIS WEEK</h4>
            <img className="tstars" src={Starstrans} alt="" />
            <h6 className="r-name">MANSUR AL HIYKAM - ETHIOPIA</h6>
            <p className="tgs">sugar • chocolate • star fruit</p>
            <h3 className="price-2">v.a. €8,00</h3>
            <Button
              className="pop-btn"
              style={{
                backgroundColor: white,
                textAlign: "center",
                textTransform: "uppercase",
                fontFamily: "Quicksand",
                color: yellow,
                width: "10em",
                height: "2.7em",
                borderRadius: "45px",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "35px",
              }}
              endIcon={<FiChevronRight />}
            >
              CHECK IT OUT
            </Button>
          </div>
          <div className="col- coffe-card ">
            <div
              style={{
                backgroundImage: `url(${product})`,
                height: "384px",
                width: "300px",
              }}
            >  <img className="org-tag" src={CORNERTAGSALE} alt="" /></div>
            <h6 className="coffeNam">ETHIOPIA SIDAMO</h6>
            <h3 className="liltags">chocolate • floral • citrus</h3>

            <img className="stars-row" src={Stars} alt="" />
            <p className="price">v.a. €8,00</p>
            <Button
              className="cards-btn"
              style={{
                backgroundColor: yellow,
                textAlign: "center",
                textTransform: "lowercase",
                fontFamily: "Quicksand",
                color: white,
                width: "10em",
                height: "2.7em",
                borderRadius: "45px",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "35px",
              }}
            >
              show options
            </Button>
          </div>
          <div className="col- coffe-card ">
            <div
              style={{
                backgroundImage: `url(${product})`,
                height: "384px",
                width: "300px",
              }}
            >
              <img className="org-tag" src={CORNERTAGORG} alt="" />
            </div>
            <h6 className="coffeNam">ETHIOPIA ARICHA</h6>
            <h3 className="liltags">plum • starfruit • blood orange</h3>

            <img className="stars-row" src={Stars} alt="" />
            <p className="price"> v.a. €9,00</p>
            <Button
              className="cards-btn"
              style={{
                backgroundColor: yellow,
                textAlign: "center",
                textTransform: "lowercase",
                fontFamily: "Quicksand",
                color: white,
                width: "10em",
                height: "2.7em",
                borderRadius: "45px",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "35px",
              }}
            >
              show options
            </Button>
          </div>
          <div className="col- coffe-card ">
            <div
              style={{
                backgroundImage: `url(${product})`,
                height: "384px",
                width: "300px",
              }}
            ></div>
            <h6 className="coffeNam">COLOMBIA GIRALDO</h6>
            <h3 className="liltags">chocolate • red fruit • caramel</h3>

            <img className="stars-row" src={Stars} alt="" />
            <p className="price"> v.a. €8,75</p>
            <Button
              className="cards-btn"
              style={{
                backgroundColor: yellow,
                textAlign: "center",
                textTransform: "lowercase",
                fontFamily: "Quicksand",
                color: white,
                width: "10em",
                height: "2.7em",
                borderRadius: "45px",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "35px",
              }}
            >
              show options
            </Button>
          </div>
          <div className="col- coffe-card ">
            <div
              style={{
                backgroundImage: `url(${product})`,
                height: "384px",
                width: "300px",
              }}
            ></div>
            <h6 className="coffeNam">ETHIOPIA SIDAMO</h6>
            <h3 className="liltags">chocolate • almond • caramel</h3>

            <img className="stars-row" src={Stars} alt="" />
            <p className="price">v.a. €7,50</p>
            <Button
              className="cards-btn"
              style={{
                backgroundColor: yellow,
                textAlign: "center",
                textTransform: "lowercase",
                fontFamily: "Quicksand",
                color: white,
                width: "10em",
                height: "2.7em",
                borderRadius: "45px",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "35px",
              }}
            >
              show options
            </Button>
          </div>
          <div className="col- coffe-card ">
            <div
              style={{
                backgroundImage: `url(${product})`,
                height: "384px",
                width: "300px",
              }}
            >
              <img className="org-tag" src={CORNERTAGNEW} alt="" />
            </div>
            <h6 className="coffeNam">ETHIOPIA SIDAMO</h6>
            <h3 className="liltags">chocolate • almond • caramel</h3>

            <img className="stars-row" src={Stars} alt="" />
            <p className="price">v.a. €7,50</p>
            <Button
              className="cards-btn"
              style={{
                backgroundColor: yellow,
                textAlign: "center",
                textTransform: "lowercase",
                fontFamily: "Quicksand",
                color: white,
                width: "10em",
                height: "2.7em",
                borderRadius: "45px",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "35px",
              }}
            >
              show options
            </Button>
          </div>
          <div className="col- coffe-card ">
            <div
              style={{
                backgroundImage: `url(${product})`,
                height: "384px",
                width: "300px",
              }}
            ></div>
            <h6 className="coffeNam">ETHIOPIA SIDAMO</h6>
            <h3 className="liltags">chocolate • almond • caramel</h3>

            <img className="stars-row" src={Stars} alt="" />
            <p className="price">v.a. €7,50</p>
            <Button
              className="cards-btn"
              style={{
                backgroundColor: yellow,
                textAlign: "center",
                textTransform: "lowercase",
                fontFamily: "Quicksand",
                color: white,
                width: "10em",
                height: "2.7em",
                borderRadius: "45px",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "35px",
              }}
            >
              show options
            </Button>
          </div>
        </div>

        <div className="d-flex justify-content-center my-4 ">
          <img className="redline-so" src={redline} alt="" />
        </div>
        <div className="d-flex justify-content-center my-5 ">
          <Button
            className="next-cate"
            style={{
              backgroundColor: white,
              textAlign: "center",
              textTransform: "uppercase",
              fontFamily: "Quicksand",
              color: orange,
              width: "13em",
              height: "2.7em",
              borderRadius: "45px",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "35px",
            }}
            endIcon={<FiChevronRight />}
          >
            NEXT CATEGORY
          </Button>
        </div>
      </div></>
  )
}

export default AllCo