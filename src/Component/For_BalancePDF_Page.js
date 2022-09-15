import React from "react";
import { useHistory } from "react-router-dom";
import cookieC from "js-cookie";

function PdfView() {
  return (
    <div>
      <div>
        <embed
          src="https://cdn11.bigcommerce.com/s-ad1xf4xgb0/content/qr_page/pdf/balance_PDF.pdf"
          width="100%"
          height="2100px"
        />
      </div>
    </div>
  );
}
export default function For_BalancePDF_Page() {
  const history = useHistory();
  const usercookie = cookieC.get("userpdf");
  function checkuser() {
    console.log("checking cookie", usercookie);
    if (usercookie) {
    } else {
      history.push("/");
    }
  }

  function getDetail() {
    console.log("this is the cookie detail", usercookie);
  }

  return <>{usercookie ? <PdfView /> : history.push("/")}</>;
}
