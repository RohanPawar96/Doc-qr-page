import React, { useEffect } from "react";
import DataForm from "./DataForm";
import Stars from "../Assets/img/icon-start-rating.png";

export default function TopBanner() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./change.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div className="container flex desktop">
        <div className="top-banner-first-content">
          <h1 className="head-h1">4Balance for</h1>
          <h1 class="text-xxxl text-anim text-anim--slide js-text-anim head-h1">
            <span class="text-anim__wrapper js-text-anim__wrapper">
              <i class="text-anim__word text-anim__word--in js-text-anim__word">
                Healthy Lifestyle
              </i>
              <i class="text-anim__word js-text-anim__word">Healthy Diet</i>
              <i class="text-anim__word js-text-anim__word">
                Ayurvedic remedies
              </i>
              <i class="text-anim__word js-text-anim__word">
                Free consultations
              </i>
            </span>
          </h1>
          <p className="head-p">Curated by Ayurvedic doctors</p>
          <p className="head-p green font-size ">
            CUSTOMIZED . LONG TERM . NATURAL
          </p>
          <div className="container flex background">
            <div className="first">
              <h3>2,00,000+</h3>
              <p>Healthy customers</p>
            </div>
            <hr />
            <div className="second">
              <div className="rating">
                <h3>4.5/5</h3>
                <img className="star-rating" src={Stars} alt="4.5" />
              </div>
              <p>100+ products</p>
            </div>
          </div>
        </div>
        <hr className="banner-hr" />
        <div className="top-banner-third-content">
          <DataForm />
        </div>
      </div>
      <div className="container mobile">
        <div className="container alignment">
          <h1 className="head-h1">4Balance for</h1>
          <h1 class="text-xxxl text-anim text-anim--slide js-text-anim head-h1">
            <span class="text-anim__wrapper js-text-anim__wrapper">
              <i class="text-anim__word text-anim__word--in js-text-anim__word">
                Healthy Lifestyle
              </i>
              <i class="text-anim__word js-text-anim__word">Healthy Diet</i>
              <i class="text-anim__word js-text-anim__word">
                Ayurvedic remedies
              </i>
              <i class="text-anim__word js-text-anim__word">
                Free consultations
              </i>
            </span>
          </h1>
          <p className="head-p">Curated by Ayurvedic doctors</p>
          <p className="head-p green font-size">
            CUSTOMIZED . LONG TERM . NATURAL
          </p>
        </div>
        <DataForm />
      </div>
      <div className="mobile">
        <div className="container flex background">
          <div className="first">
            <h3>2,00,000+</h3>
            <p>Healthy customers</p>
          </div>
          <hr />
          <div className="second">
            <div className="rating">
              <h3>4.5/5</h3>
              <img className="star-rating" src={Stars} alt="4.5" />
            </div>
            <p>100+ products</p>
          </div>
        </div>
      </div>
    </>
  );
}
