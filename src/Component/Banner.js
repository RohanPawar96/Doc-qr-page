import React, { useDebugValue } from "react";
import MobileApp from "../Component/MobileApp";

export default function Banner() {
  return (
    <>
      <div className="container banner">
        <div className="banner-image">
          <img
            src="https://cdn11.bigcommerce.com/s-ad1xf4xgb0/content/qr_page/img/qr-banner.png"
            alt="qr-banner"
          />
        </div>
        <ul className="banner-content">
          <li className="content">
            <div className="content-image">
              <img
                src="https://cdn11.bigcommerce.com/s-ad1xf4xgb0/content/qr_page/img/icon-products.png"
                alt="product"
              />
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
              <img
                src="https://cdn11.bigcommerce.com/s-ad1xf4xgb0/content/qr_page/img/icon-lifestyle.png"
                alt="lifestyle"
              />
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
              <img
                src="https://cdn11.bigcommerce.com/s-ad1xf4xgb0/content/qr_page/img/icon-diet.png"
                alt="diet"
              />
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
              <img
                src="https://cdn11.bigcommerce.com/s-ad1xf4xgb0/content/qr_page/img/icon-experts.png"
                alt="expert"
              />
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
      <MobileApp />
    </>
  );
}
