import React from "react";
import wb1 from "../../assests/icons/wb1.png";
import wb2 from "../../assests/icons/wb2.png";
import whiteLine from "../../assests/icons/whiteLine.png";
const ChooseUs = () => {
  return (
    <>
      <div className=" choose-wrap">
        <img src={wb1} className="borimg" alt="" />
        <div className="chose-info-pt">
          <div className="container">
            <div className="chose-hd-wrp ">
              <h4 className="choose-hd">
                WHY CHOOSE ZWARTE ROES SPECIALTY COFFEE?
              </h4>
            </div>
            <div className=" info-yus-wrap">
              <h4 className="whyus-hd">
                Online koffiebonen kopen bij Zwarte Roes®
              </h4>
              <p className="whyus-parg">
                Bij ons kan je online gemakkelijk en veilig koffiebonen kopen.
                Online koffiebonen kopen doen onze klanten graag bij ons, ze
                beoordelen ons dan ook met een 9,5 (op basis van 500 reviews).
                Je kunt bij ons kiezen tussen 250 grams en kiloverpakkingen. Als
                je, je koffiebonen online bestelt voor 15.00 uur worden deze
                dezelfde (werk)dag verzonden. Verzending is gratis vanaf €35 en
                je kan betalen met iDEAL, Paypal, Credit Card, Bancontact en
                Apple Pay.
              </p>
              <img className="wline-img" src={whiteLine} alt="" />
            </div>
            <div className=" info-yus-wrap">
              <h4 className="whyus-hd">Specialty Coffee</h4>
              <p className="whyus-parg">
                Bij ons is het volledige assortiment 100% Specialty Coffee
                kwaliteit. Dit houdt in dat onze koffiebonen naast het feit dat
                ze 100% Arabica zijn, voldoen aan de hoogste standaard binnen
                koffiewereld. Koffiebonen om echt 100% van te genieten.
                Daarnaast brengt Specialty Coffee een ander voordeel met zich
                mee.
              </p>
              <img className="wline-img" src={whiteLine} alt="" />
            </div>
            <div className=" info-yus-wrap">
              <h4 className="whyus-hd">Transparant</h4>
              <p className="whyus-parg">
                Alle koffies zijn traceerbaar tot aan de koffieboer en weten
                exact wat zij betaalt krijgen. Gaat de kwaliteit van de
                koffiebonen omhoog, dan krijgt de koffieboer ook beter betaald.
                Win win dus. Zo kun je gegarandeerd eerlijke koffiebonen online
                bestellen bij Zwarte Roes®.
              </p>
              <img className="wline-img" src={whiteLine} alt="" />
            </div>
            <div className=" info-yus-wrap">
              <h4 className="whyus-hd">100% natuurlijk</h4>
              <p className="whyus-parg">
                Zwarte Roes® koffiebonen zijn 100% natuurlijk en vrij van
                (kunstmatige) smaak en geurstoffen. Ook bevatten de koffiebonen
                geen noten of chocolade. Smaaktonen die vermeld staan op het
                label zijn niet toegevoegd aan de koffiebonen. Dit zijn smaken
                die je van nature kunt terugvinden bij een goede zetting. Puur
                natuur dus.
              </p>
              <img className="wline-img" src={whiteLine} alt="" />
            </div>
            <div className=" info-yus-wrap">
              <h4 className="whyus-hd">Vers gebrande koffiebonen</h4>
              <p className="whyus-parg">
                Al onze koffiebonen zijn altijd vers gebrand. Wij branden
                ongeveer 2 tot 3 keer per week, en omdat we kleinschalig zijn
                houdt dit in dat we nooit een grotere voorraad gebrande
                koffiebonen hebben dan van een week geleden. Zo kun je veilig je
                koffiebonen online kopen en weet je dat de koffie meestal maar
                enkele dagen geleden is gebrand. Zo heb je altijd de meest verse
                koffiebonen in huis.
              </p>
              <img className="wline-img" src={whiteLine} alt="" />
            </div>
            <div className=" info-yus-wrap pb-5">
              <h4 className="whyus-hd">100% recyclebaar</h4>
              <p className="whyus-parg">
                De koffiebonen van Zwarte Roes® worden verpakt in 100%
                recyclebare verpakkingen met de branddatum op de achterkant van
                de verpakking. Onze koffiebonen zijn het lekkerst binnen 6-8
                weken maar ten minste houdbaar tot een jaar erna.
              </p>
            </div>
          </div>
        </div>
        <img src={wb2} className="borimg" alt="" />
      </div>
    </>
  );
};

export default ChooseUs;
