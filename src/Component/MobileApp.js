import React from "react";

export default function MobileApp() {
  return (
    <div className="container banner">
      <h1>Kapiva app is LIVE!</h1>
      <p>
        Download & Signup, to get
        <span style={{ fontWeight: 900 }}> Rs. 200</span> instant cashback
      </p>
      <div className="stores">
        <div className="playstore">
          <a href="https://apps.apple.com/in/app/kapiva/id1616690263">
            <img
              src="https://cdn11.bigcommerce.com/s-ad1xf4xgb0/content/qr_page/img/icon-playstore.svg"
              alt="appstore"
            />
          </a>
        </div>
        <div className="appstore">
          <a href="https://play.google.com/store/apps/details?id=com.kapiva.app">
            <img
              src="https://cdn11.bigcommerce.com/s-ad1xf4xgb0/content/qr_page/img/icon-appstore.svg"
              alt="playstore"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
