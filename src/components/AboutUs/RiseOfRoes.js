import React from "react";
import paternAbour from "../../assests/icons/paternAbour.png";
import roasticon from "../../assests/icons/roasticon.png";
import camicon from "../../assests/icons/camicon.png";
import stampicon from "../../assests/icons/stampicon.png";
import planeicon from "../../assests/icons/planeicon.png";
import zwicon from "../../assests/icons/zwicon.png";
import backpackicon from "../../assests/icons/backpackicon.png";
import earthicon from "../../assests/icons/earthicon.png";
import suitcase from "../../assests/icons/suitcase.png";
import hearts from "../../assests/icons/hearts.png";
import { IoIosArrowDown } from "react-icons/io";

const RiseOfRoes = () => {
  return (
    <>
      <div className="rr-wrap">
        <div className="row justify-content-center">
          <img src={paternAbour} className="patnabout" alt="" />
        </div>
        <div className="justify-content-center">
          <h4 className="roes-hd">THE RISE OF ZWARTE ROES</h4>
        </div>

        <div className="time-wrap mt-3 flex-column">
          <div className="upper-line-rr"></div>

          <div className="middle-line"></div>

          <div className="right-side-rr">
            <div className="date-line">
              <h3 className="date1 ">2015.</h3>
              <div className="sideline-rr"></div>
            </div>
            <div className="both-icon">
              <img src={planeicon} className="plane-icon " alt="" />
              <div>
                <img src={earthicon} alt="" />
              </div>
            </div>
            <div className="para2-rr">
              <p className="para-rr">
                {" "}
                Weer thuis. Met ons laatste spaargeld en alle ervaringen op zak
                hebben wij besloten het radicaal anders te doen. Op zoek naar
                een combinatie van ultieme smaakbeleving, een eerlijkere
                verdeling van het resultaat én onze passie voor de mooiste
                reisverhalen. Toen was Zwarte Roes Specialty Coffee geboren.
              </p>
              <p className="para-rr">
                Specialty coffee van de hoogste kwaliteit, ingekocht tegen
                eerlijke premiums, wekelijks vers gebrand en verpakt in eigen
                branderij. Wij delen het verhaal achter onze koffie en zetten de
                hardwerkende producenten en onze partners in de spotlights. Wij
                doen dit samen, dit is hoe het hoort. Samen met hen komen wij
                tot dit ultieme product.
              </p>
            </div>
            <div className="date-line3">
              <h3 className="date1 twenty ">2022.</h3>
              <div className="sideline-rr"></div>
            </div>

            <div className="stamp-icon">
              <img src={stampicon} alt="" />
            </div>
          </div>
          <div className="left-side-rr">
            <div className="camicon">
              <img className="camimg" src={camicon} alt="" />
            </div>
            <div className="para-sec-rr">
              <p className="para-rr">
                {" "}
                Wij toen onze banen hadden opgezegd. We verkochten al onze
                bezittingen en boekten een enkeltje naar Sydney, Australië met
                ieder enkel een grote rugtas. Back to basics in een reis om de
                wereld.
              </p>
              <p className="para-rr">
                {" "}
                In Sydney hebben wij de specialty coffee cultuur geproefd en in
                Zuid-Amerika hebben wij ervaren hoe zwaar en intensief het
                proces van koffie verbouwen, oogsten en verwerken is. Dat was
                pas een eye opener!
              </p>
              <p className="para-rr">
                Hoe kan het nou dat wij in Nederland voor een paar euro een kilo
                koffie kunnen kopen? Terwijl deze met de hand word geplukt,
                verwerkt, verscheept, gebrand, verpakt en verzonden moet worden?
                Hier gaat iets niet helemaal lekker...
              </p>
            </div>
            <div className="bothicons-rr3">
              {" "}
              <img className="backpack" src={backpackicon} alt="" />
              <img src={suitcase} alt="" />
            </div>
            <div className="date-line2">
              <div className="sideline-rr2"></div>
              <h3 className="date1 seven ">2017.</h3>
            </div>
            <div className="zw-icon">
              <img src={zwicon} alt="" />
            </div>
            <div className="para3-rr">
              <p className="para-rr">
                {" "}
                Zwarte Roes is growing by the day. Our delicious specialty
                coffee can be found in homes and cafes all over the Netherlands.
              </p>
              <p className="para-rr">
                Our message of the importance of fair trade is spreading far and
                wide! More people than ever are joining our mission to create a
                better future for everyone by becoming mindful shoppers and
                supporting ethically sourced products!
              </p>
            </div>
            <div className="bothicons-rr2">
              {" "}
              <img src={hearts} alt="" />
              <div>
                {" "}
                <img src={roasticon} alt="" />
              </div>
            </div>
            <div className="icon-down">
              <IoIosArrowDown className="ioio" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiseOfRoes;
