import React from "react";
import AllCo from "./AllCo";
import SingleOriginCo from "./SingleOriginCo";

const TagsContent = (props) => {
  return (
    <>
      {props.AllComp && <AllCo />}
      {props.Singleorigin && <SingleOriginCo />}
    </>
  );
};

export default TagsContent;
