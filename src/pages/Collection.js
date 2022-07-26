import React, { useState } from "react";
import ChooseUs from "../components/Collection/ChooseUs";
import CutomerReviewsCo from "../components/Collection/CutomerReviewsCo";
import OurKit from "../components/Collection/OurKit";
import SingleOriginCo from "../components/Collection/SingleOriginCo";
import Tags from "../components/Collection/Tags";
import TagsContent from "../components/Collection/TagsContent";
import AnnouncementBar from "../components/commonComp/AnnouncementBar";
import Footer from "../components/commonComp/Footer";
import Navbar from "../components/commonComp/Navbar";
import CoffeeSet from "../components/home/CoffeeSet";
import NewsLetter from "../components/home/NewsLetter";

const Collection = () => {
  const [AllComp, setAllComp] = useState(false);
  const [Singleorigin, setSingleorigin] = useState(true);
  const AllHandler = () => {
    setAllComp(true);
    setSingleorigin(false);
  };
  const SingleoriginHandler = () => {
    setAllComp(false);
    setSingleorigin(true);
  };
  return (
    <>
      <Navbar />
      <AnnouncementBar />
      <Tags AllHandler={AllHandler} SingleoriginHandler={SingleoriginHandler} />
      <TagsContent AllComp={AllComp} Singleorigin={Singleorigin} />
      <ChooseUs />
      <OurKit />
      <CutomerReviewsCo />
      <CoffeeSet />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Collection;
