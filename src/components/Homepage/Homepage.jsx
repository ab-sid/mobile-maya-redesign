import React from "react";
import FindProducts from "../FindProducts/FindProducts";
import Slider from "../Slider/Slider";
import ProductNews from "../ProductNews/ProductNews";
import LatestMobile from "../LatestMobile/LatestMobile";
import LatestReview from "../LatestReview/LatestReview";
import Compare from "../Compare/Compare";

const Homepage = () => {
  return (
    <div className="bg-[#F2F3F5]">
      <FindProducts></FindProducts>
      <Slider></Slider>
      <ProductNews></ProductNews>
      <LatestMobile></LatestMobile>
      <LatestReview></LatestReview>
      <Slider></Slider>
      <Compare></Compare>
    </div>
  );
};

export default Homepage;
