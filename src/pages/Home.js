import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/commonComp/Navbar";
import AnnouncementBar from "../components/commonComp/AnnouncementBar";
import HeroComponent from "../components/home/HeroComponent";
import Featured from "../components/home/Featured";
import TheyMatter from "../components/home/TheyMatter";
import CustomerReview from "../components/home/CustomerReview";
import CoffeeGuarantee from "../components/home/CoffeeGuarantee";
import DeliveryInfo from "../components/home/DeliveryInfo";
import Blends from "../components/home/Blends";
import RoastFilter from "../components/home/RoastFilter";
import SingleOrigin from "../components/home/SingleOrigin";
import Decaf from "../components/home/Decaf";
import CoffeGear from "../components/home/CoffeGear";
import Footer from "../components/commonComp/Footer";
import CoffeeSet from "../components/home/CoffeeSet";
import FamilyBussines from "../components/home/FamilyBussines";
import LineCom from "../components/home/LineCom";
import Announcement from "../components/home/Announcement";
import NewsLetter from "../components/home/NewsLetter";

const Home = (props) => {
  return (
    <>
      <Navbar />
      <AnnouncementBar />
      <HeroComponent/>
      <Featured/>
      <TheyMatter/>
      <CustomerReview/>
      <CoffeeGuarantee/>
      <DeliveryInfo/>
      <Blends/>
      <RoastFilter/>
      <SingleOrigin/>
      <Decaf/>
      <CoffeGear/>
      <CoffeeSet/>
      <FamilyBussines/>
      <LineCom/>
      <Announcement/>
      <NewsLetter/>

<Footer/>
    </>
  );
};

Home.propTypes = {};

export default Home;
