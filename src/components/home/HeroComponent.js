import { Button } from "@mui/material";
import React from "react";
import heroimge2 from "../../assests/images/heroimge2.png";
import { yellow } from "../../constants/index";
import { white } from "../../constants/index";
const HeroComponent = () => {
  return (
    <>
      <div className="" style={{ width: "100%", height: "80h" }}>
        <img src={heroimge2} alt="" className="hero_con" />

        <div className="hero-hd">
          <div className="col-lg-5">
            <h4 className="hero-heading">ERG LEKKERE KOFFIE</h4>
            <h5 className="heropara">
              Onze vers gebrande koffie wordt zorgvuldig geselecteerd, gebrand
              op bestelling en verpakt met liefde. Zo maken wij koffiebonen
              online bestellen veilig, makkelijk en snel.
            </h5>
            <Button
              href="/product"

              className="btn-hero"
              style={{
                backgroundColor: yellow,
                textAlign: "center",
                fontFamily: "Permanent Marker",
                color: white,
                width: "8em",
                height: "2.7em",
                borderRadius: "45px",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "35px",
                boxShadow: "0px 15px 10px -9px #909090",
              }}
            >
              SHOP
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroComponent;
