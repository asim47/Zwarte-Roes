import { Box, Grid } from "@mui/material";
import React from "react";
import { Link } from "@mui/material";
import yelowbgoverlay from "../../assests/images/yelowbg-overlay.png";
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
    <>
      <div
        className="footer-con"
        style={{ backgroundImage: `url(${yelowbgoverlay})` }}
      >
        <div className="container-fluid footer-info-wrap">
          <div className="row lis-row-ft">
            <div className="col-">
              {" "}
              <Link className="ft-li">SHOP COFFEE</Link>{" "}
            </div>
            <div className="col-">
              {" "}
              <Link className="ft-li">SHOP COFFEE GEAR</Link>{" "}
            </div>
            <div className="col-">
              {" "}
              <Link className="ft-li">ABONNEMENT</Link>{" "}
            </div>
            <div className="col-">
              {" "}
              <Link className="ft-li">WHOLESALE</Link>{" "}
            </div>
          </div>
          <div className="row lower-footer">
            <div className="col-lg-3 ft-colu1">
              <img className="logo-ft" src={logomain} alt="" />
              <div className="li-socials">
                <div>
                  <img src={facebook} alt="" />
                </div>
                <div>
                  <img src={Instagram} alt="" />
                </div>
                <div>
                  <img src={pinterest} alt="" />
                </div>
                <div>
                  <img src={youtube} alt="" />
                </div>
              </div>
              <h4 className="happy-ft">MAKING PEOPLE HAPPY SINCE 2017.</h4>
            </div>
            <div className="col-lg-4 col-12 right-footer-info">
              <ul className="ft-ul">
                <li className="ft-links"> FAQ</li>
                <li className="ft-links">BLOG</li>
                <li className="ft-links"> Contact</li>
                <li className="ft-links">Affiliate</li>
                <li className="ft-links">Algemene Voorwaarden</li>
                <li className="ft-links">Verzend- en retourbeleid</li>
              </ul>
              <div className="  pays rigt-ft-pays ">
                <div className="">
                  {" "}
                  <img src={Ideal} />
                </div>
                <div className="">
                  <img src={Visa} />
                </div>
                <div className="">
                  <img src={ApplePay} />
                </div>
                <div className="">
                  <img src={Mastercard} />
                </div>
                <div className="">
                  <img src={Maestro} />
                </div>
                <div className="">
                  <img src={GooglePay} />
                </div>
                <div className="">
                  <img src={Amex} />
                </div>
                <div className="">
                  <img src={PayPal} />
                </div>
                <div className="">
                  <img src={ShopPay} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
