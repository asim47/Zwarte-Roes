import React from "react";
import AnnouncementBar from "../components/commonComp/AnnouncementBar";
import Footer from "../components/commonComp/Footer";
import Navbar from "../components/commonComp/Navbar";
import Blends from "../components/home/Blends";
import CoffeeSet from "../components/home/CoffeeSet";
import CoffeGear from "../components/home/CoffeGear";
import Decaf from "../components/home/Decaf";
import NewsLetter from "../components/home/NewsLetter";
import RoastFilter from "../components/home/RoastFilter";
import SingleOrigin from "../components/home/SingleOrigin";
import Change from "../components/ProductCategories/Change";
import DeliveryInfo2 from "../components/ProductCategories/DeliveryInfo2";
import Options from "../components/ProductCategories/Options";
import ProHero from "../components/ProductCategories/ProHero";
import { TabTitle } from "./PageTitle";

const Product = () => {
  TabTitle("Product Categories | Zwarte Roes")
  return (
    <>
      <Navbar />
      <AnnouncementBar />
      <ProHero />
      <Options />
      <Blends />
      <RoastFilter />
      <SingleOrigin />
      <Decaf lineNone={"lineNone"} />
      <DeliveryInfo2 />
      <CoffeGear />
      <Change />
      <CoffeeSet />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Product;
