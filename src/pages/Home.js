import React from "react";
import PropTypes from "prop-types";
import Header from "../components/home/Header";
import Navbar from "../components/commonComp/Navbar";
import AnnouncementBar from "../components/commonComp/AnnouncementBar";
import Footer from "../components/commonComp/Footer";
const Home = (props) => {
  return (
    <>
      <Navbar />
      <AnnouncementBar />
      <Footer/>
    </>
  );
};

Home.propTypes = {};

export default Home;
