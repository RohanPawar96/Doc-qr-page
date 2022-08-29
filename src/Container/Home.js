import React from "react";
import Banner from "../Component/Banner";
import DataForm from "../Component/DataForm";
import LowerContent from "../Component/LowerContent";

export default function Home() {
  return (
    <div className="main">
      <DataForm />
      <Banner />
      <LowerContent />
    </div>
  );
}
