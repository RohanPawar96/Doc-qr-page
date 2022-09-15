import React, { useState, useEffect } from "react";
import { useHistory, useNavigate, useLocation } from "react-router-dom";

function ErrorMessage(props) {
  return (
    <>
      <span
        style={{
          fontSize: "10px",
          color: "red",
        }}
      >
        {props.Message}
      </span>
    </>
  );
}
function DataForm(props) {
  let query = useQuery();
  const [stringRadio, setStringradio] = useState("true");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [optinWhatsapp_email, setoptinWhatsapp_email] = useState(1);
  const [validPhone, SetValidphone] = useState(" ");
  const [validName, setValidname] = useState(" ");
  const [validemail, setValidemail] = useState(" ");
  const [submitForm, setSubmitForm] = useState("");
  const [subMitButtonColor, setSumbitButtoncolor] = useState("#80a03c75");
  const [urlQ, setUrlQ] = useState({
    product: query.get("product"),
    utm_medium: query.get("utm_medium"),
    therapy: query.get("therapy"),
    subcategory: query.get("subcategory"),
    utm_source: query.get("utm_source"),
  });
  useEffect(() => {
    submitValidate();
    console.log("this is the submit button value", submitForm);
    console.log("this is the submit button color", subMitButtonColor);
  }, [validName, validPhone, validemail, submitValidate]);
  function submitValidate() {
    console.log("calling final submit");
    if (!validName || !validPhone || !validemail) {
      setSubmitForm(false);
      setSumbitButtoncolor("#80a03c75");
    } else {
      setSubmitForm(true);
      setSumbitButtoncolor("#80a03c");
    }
  }
  function checkEmail(mail) {
    setEmail(mail);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      setValidemail(true);
    } else {
      setValidemail(false);
    }
  }

  function checkName(name) {
    setName(name);
    var letters = /^[a-zA-Z]+$/;
    if (name.match(letters)) {
      setValidname(true);
    } else {
      setValidname(false);
    }
  }
  function phonenumber(contact) {
    console.log("ephone len", contact.lenght);
    setContact(contact);
    const phone = String(contact).substring(3);
    var phoneno = /^[6789]\d{9}$/;
    if (contact.match(phoneno)) {
      if (contact.lenght > 10) {
        SetValidphone(false);
      } else {
        SetValidphone(true);
      }
    } else {
      SetValidphone(false);
    }
  }

  useEffect(() => {
    // console.log(urlQ)
    // console.log("this it the product1`23",query.get('product'))
    // console.log("radiovalue", stringRadio)
    if (optinWhatsapp_email === true) {
      setoptinWhatsapp_email(1);
    }
    if (optinWhatsapp_email === false) {
      setoptinWhatsapp_email(0);
    }
  }, [optinWhatsapp_email]);

  const history = useHistory();
  useEffect(() => {
    console.log(" initial phone validation", validPhone);
  }, [validPhone]);
  useEffect(() => {
    getData();
    console.log(setoptinWhatsapp_email);
  }, [optinWhatsapp_email]);

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  function getData() {
    // console.log("this is therapy:",query.get('therapy'))
    // console.log("this is utmSource",query.get('utm_source'))
    // console.log("this is subcat:",query.get('subcategory'))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this is the value", typeof valid);
    console.log(name, contact, email, optinWhatsapp_email, urlQ);
    console.log("this it ht ephone lenght", contact.length);
    if (
      !String(name).trim() ||
      !String(email).trim() ||
      !String(contact).trim()
    ) {
      if (!String(validName).trim()) {
        setValidname(false);
      }
      if (!String(validemail).trim()) {
        setValidemail(false);
      }
      if (!String(validPhone).trim()) {
        SetValidphone(false);
      }
    } else if (!validPhone) {
      console.log("ephone pointer");
      SetValidphone(false);
    } else {
      var date = new Date();
      date.setTime(date.getTime() + 1 * 60 * 1000);
      var expires = "; expires=" + date.toGMTString();
      document.cookie =
        "userpdf=" + String(Math.random()) + expires + "; path=/";

      console.log(" going to hit server to submit data");
      fetch("https://kapiva.app/api/4balance_lead.php?p=4balance_lead", {
        method: "POST",

        body: JSON.stringify({
          customer_name: name,
          mobile: contact,
          email: email,
          optin_whatsapp_email: parseInt(optinWhatsapp_email),
          product: String(urlQ.product),
          therapy: String(urlQ.therapy),
          subcategory: String(urlQ.subcategory),
          utm_medium: String(urlQ.utm_medium),
          utm_source: String(urlQ.utm_source),
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          res.json();
          console.log(res);
        })
        .then((result) => {
          // ("/for_balancepdf");
          history.push("/for_balancepdf");
        })
        .catch((error) => {
          alert("Faild");
        });
    }
  };

  return (
    <div className="container">
      <div class="col">
        <input
          onChange={(e) => checkName(e.target.value)}
          type="text"
          class="form-control"
          placeholder="First name"
          aria-label="First name"
        />
        {validName ? (
          ""
        ) : (
          <ErrorMessage Message="Please enter a valid First Name" />
        )}
      </div>

      <div className="form-flex">
        <div class="col">
          <input
            onChange={(e) => checkEmail(e.target.value)}
            type="email"
            class="form-control"
            placeholder="Email"
            aria-label="Email"
          />
          {validemail ? (
            ""
          ) : (
            <ErrorMessage Message="Please enter a valid email" />
          )}
        </div>

        <div class="col">
          <input
            onChange={(e) => phonenumber(e.target.value)}
            type="number"
            class="form-control"
            placeholder="Contact"
            aria-label="Contact"
            minLength={10}
          />
          {validPhone ? (
            ""
          ) : (
            <ErrorMessage Message="Please enter a valid phone Number" />
          )}
        </div>
      </div>

      <div className="wp-content">
        <input
          type="checkbox"
          name="whatsapp"
          id="whatsapp"
          style={{
            appearance: "auto",
          }}
          checked={optinWhatsapp_email}
          onClick={(e) => {
            console.log("checkbox value", optinWhatsapp_email);
            setoptinWhatsapp_email(!optinWhatsapp_email);
            if (optinWhatsapp_email) {
              setStringradio("true");
            } else {
              setStringradio("false");
            }
          }}
        />
        <label htmlFor="whatsapp">
          Get updates on{" "}
          <span style={{ textDecoration: "underline" }} className="green">
            WhatsApp
          </span>
          . You may opt out anytime
        </label>
      </div>
      <div class="col-12">
        <input
          type="Submit"
          value="VIEW FOR FREE"
          style={{
            backgroundColor: { subMitButtonColor },
          }}
          onClick={(e) => handleSubmit(e)}
        />
      </div>
    </div>
  );
}

export default DataForm;
