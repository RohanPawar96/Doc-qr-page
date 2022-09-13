import React from "react";
import balance from "../Assets/pdf/balance_PDF.pdf";

export default function For_BalancePDF_Page() {
  return (
    <div>
      <div>
        <embed src={balance} width="100%" height="2100px" />
      </div>
    </div>
  );
}
