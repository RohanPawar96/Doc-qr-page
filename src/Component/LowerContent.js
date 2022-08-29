import React from "react";

function LowerContent() {
  return (
    <div className="container">
      <div className="head">
        <h1 className="lower-h1">
          WHY <span style={{ fontWeight: "900" }}>KAPIVA?</span>
        </h1>
        <p className="lower-p green">HEALTHY INSIDE, HAPPY OUTSIDE</p>
      </div>
      <div className="stpes">
        <ul className="numbers">
          <li className="single-number">
            <p className="number">01</p>
          </li>
          <li className="number-text">
            <p className="number-content">
              Formulated by experts at kapiva academy of ayurveda
            </p>
          </li>
          <li className="single-number">
            <p className="number">02</p>
          </li>
          <li className="number-text">
            <p className="number-content number-2">
              The best ingredients passed through toughest process
            </p>
          </li>
          <li className="single-number">
            <p className="number">03</p>
          </li>
          <li className="number-text">
            <p className="number-content number-3">
              Holistic solutions for every need
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LowerContent;
