import React from "react";
import expert from "../Assets/img/icon-experts.png";
import lifestyle from "../Assets/img/icon-lifestyle.png";
import product from "../Assets/img/icon-products.png";
import diet from "../Assets/img/icon-diet.png";
import bgContent from "../Assets/img/qr-banner.png";

export default function Banner() {
  return (
    <div className="container banner">
      <div className="banner-image">
        <img src={bgContent} alt="" />
      </div>
      <ul className="banner-content">
        <li className="content">
          <div className="content-image">
            <img src={product} alt="" />
          </div>
          <h1 className="content-h1">
            AYURVEDIC
            <br />
            PRODUCTS
          </h1>
          <p className="content-p">
            That can easily integrate into your daily life
          </p>
        </li>
        <li className="content">
          <div className="content-image">
            <img src={lifestyle} alt="" />
          </div>
          <h1 className="content-h1">
            LIFESTYLE
            <br />
            RECOMMENDATIONS
          </h1>
          <p className="content-p">
            Complement it with Yoga Asanas for maximum benefit
          </p>
        </li>
        <li className="content">
          <div className="content-image">
            <img src={diet} alt="" />
          </div>
          <h1 className="content-h1">
            DIET & MEAL
            <br />
            PLANS
          </h1>
          <p className="content-p">
            Get the meal plans that work for you and your health goals
          </p>
        </li>
        <li className="content">
          <div className="content-image">
            <img src={expert} alt="" />
          </div>
          <h1 className="content-h1">
            EXPERT
            <br />
            CONNECT
          </h1>
          <p className="content-p">
            If in doubt, reach out to our Ayurveda Experts, for free
          </p>
        </li>
      </ul>
    </div>
  );
}
