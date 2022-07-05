import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "@mui/material";
import whitesheet from "../../assests/icons/whitesheet.png";
import logomain from "../../assests/icons/logomain.png";
import youtube from "../../assests/icons/youtube.png";
import facebook from "../../assests/icons/facebook.png";
import pinterest from "../../assests/icons/pinterest.png";
import Instagram from "../../assests/icons/Instagram.png";
import Amex from "../../assests/icons/Amex.png";
import ApplePay from "../../assests/icons/ApplePay.png";
import GooglePay from "../../assests/icons/GooglePay.png";
import ShopPay from "../../assests/icons/ShopPay.png";
import PayPal from "../../assests/icons/PayPal.png";
import Ideal from "../../assests/icons/Ideal.png";
import Visa from "../../assests/icons/Visa.png";
import Mastercard from "../../assests/icons/Mastercard.png";
import Maestro from "../../assests/icons/Maestro.png";

const Footer = () => {
  return (
    <Box className="footerCon">
      <div className="container">
        <div className="row  ft-nav-row   ">
          <div className="col- ft-lis ">
            <Link className="ft-li"> SHOP COFFEE</Link>
          </div>
          <div className="col- ft-lis">
            <Link className="ft-li"> SHOP COFFEE GEAR</Link>
          </div>
          <div className="col- ft-lis">
            <Link className="ft-li"> ABONNEMENT</Link>
          </div>
          <div className="col- ft-lis">
            <Link className="ft-li">WHOLESALE</Link>
          </div>
        </div>

        <Grid container sx={{ display: "flex" }}>
          <Grid item md={6} lg={6} className="awl_socials">
            <div className="hands-logo">
              <img src={logomain} />
            </div>
            <div className="row socials ">
              <div className="col-  ">
                <Link className="">
                  {" "}
                  <img src={facebook} />
                </Link>
              </div>
              <div className="col-">
                <Link className="">
                  <img src={Instagram} />
                </Link>
              </div>
              <div className="col-">
                <Link className="">
                  {" "}
                  <img src={pinterest} />
                </Link>
              </div>
              <div className="col- ">
                <Link className="">
                  <img src={youtube} />
                </Link>
              </div>
            </div>

            <div className="endorsment">
              <h4 classname="">MAKING PEOPLE HAPPY SINCE 2017.</h4>
            </div>
          </Grid>
          <Grid
            item
            sx={{
              backgroundImage: `url(${whitesheet})`,
              backgroundRepeat: "no-repeat",
            }}
            className="ft-img"
          >
            <div className="row rigt-ft-socials">
              <ul className="ft-ul">
                <li className="ft-links"> FAQ</li>
                <li className="ft-links">BLOG</li>
                <li className="ft-links"> Contact</li>
                <li className="ft-links">Affiliate</li>
                <li className="ft-links">Algemene Voorwaarden</li>
                <li className="ft-links">Verzend- en retourbeleid</li>
              </ul>
            </div>
            <div className=" row pays rigt-ft-socials">
              <div className="col-">
                {" "}
                <img src={Ideal} />
              </div>
              <div className="col-">
                <img src={Visa} />
              </div>
              <div className="col-">
                <img src={ApplePay} />
              </div>
              <div className="col-">
                <img src={Mastercard} />
              </div>
              <div className="col-">
                <img src={Maestro} />
              </div>
              <div className="col-">
                <img src={GooglePay} />
              </div>
              <div className="col-">
                <img src={Amex} />
              </div>
              <div className="col-">
                <img src={PayPal} />
              </div>
              <div className="col-">
                <img src={ShopPay} />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Footer;
