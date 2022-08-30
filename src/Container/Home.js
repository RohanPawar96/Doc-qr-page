import React from "react";
import Banner from "../Component/Banner";
import LowerContent from "../Component/LowerContent";
import TopBanner from "../Component/TopBanner";

export default function Home() {
  return (
    <div className="main">
      <TopBanner />
      <Banner />
      <LowerContent />

    </div>
  );
}
