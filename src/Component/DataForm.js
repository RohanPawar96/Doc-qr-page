import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";

function DataForm() {
  let query = useQuery();
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [optinWhatsapp_email, setoptinWhatsapp_email] = useState(0);
  // eslint-disable-next-line
  const [urlQ, setUrlQ] = useState({
    product: query.get("product"),
    utm_medium: query.get("utm_medium"),
    therapy: query.get("therapy"),
    subcategory: query.get("subcategory"),
    utm_source: query.get("utm_source"),
  });

  function onchecked() {
    let is_checked = document.getElementById("whatsapp");
    if (is_checked.checked) {
      return setoptinWhatsapp_email("1");
    } else {
      return setoptinWhatsapp_email("0");
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onchecked();
    fetch("https://kapiva.app/api/4balance_lead.php?p=4balance_lead", {
      method: "POST",

      body: JSON.stringify({
        customer_name: name,
        mobile: "+91" + contact,
        email: email,
        optin_whatsapp_email: String(optinWhatsapp_email),
        product: urlQ.product,
        therapy: urlQ.therapy,
        subcategory: urlQ.subcategory,
        utm_medium: urlQ.utm_medium,
        utm_source: urlQ.utm_source,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          history("/For_BalancePDF");
        },
        (error) => {
          alert("Faild");
        }
      );
  };
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} class="row">
        <div class="col">
          <input
            onChange={(e) => setName(e.target.value)}
            {...register("firstName", {
              required: true,
              minLength: 2,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
            type="text"
            class="form-control"
            placeholder="First name"
            aria-label="First name"
            required
          />
          <span>
            {errors?.firstName?.type === "required" && (
              <p class="alert alert-danger p-firstname" role="alert">
                {" "}
                This field is required
              </p>
            )}

            {errors?.firstName?.type === "minLength" && (
              <p class="alert alert-danger p-firstname" role="alert">
                First name cannot be a single characters
              </p>
            )}

            {errors?.firstName?.type === "maxLength" && (
              <p class="alert alert-danger p-firstname" role="alert">
                First name cannot exceed 20 characters
              </p>
            )}

            {errors?.firstName?.type === "pattern" && (
              <p class="alert alert-danger p-firstname" role="alert">
                Alphabetical characters only
              </p>
            )}
          </span>
        </div>
        <div className="form-flex">
          <div class="col">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              aria-label="Email"
              onChange={(e) => setEmail(e.target.value)}
              {...register("mail", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              })}
              required
            />
            <span>
              {errors?.mail?.type === "required" && (
                <p class="alert alert-danger p-email" role="alert">
                  This field is required
                </p>
              )}
              {errors?.mail?.type === "pattern" && (
                <p class="alert alert-danger p-email" role="alert">
                  Invalid Email id
                </p>
              )}
            </span>
          </div>
          <div class="col">
            <input
              type="number"
              class="form-control"
              placeholder="Contact"
              aria-label="Contact"
              minLength={10}
              {...register("number", { required: true, pattern: /[0-9]{10}/ })}
              onChange={(e) => setContact(e.target.value)}
              required
            />
            <span>
              {errors?.number?.type === "required" && (
                <p class="alert alert-danger p-number" role="alert">
                  This field is required
                </p>
              )}
              {errors.number?.type === "pattern" && (
                <p class="alert alert-danger p-number" role="alert">
                  10 digit only{" "}
                </p>
              )}
            </span>
          </div>
        </div>
        <div className="wp-content">
          <input type="checkbox" name="whatsapp" id="whatsapp" />
          <label htmlFor="whatsapp">
            Get updates on{" "}
            <span style={{ textDecoration: "underline" }} className="green">
              WhatsApp
            </span>
            . You may opt out anytime
          </label>
        </div>
        <div class="col-12">
          <input type="Submit" value="VIEW FOR FREE" />
        </div>
      </form>
    </div>
  );
}

export default DataForm;
