import React from "react";
import { useForm } from "react-hook-form";

function DataForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} class="row">
        <div class="col">
          <input
            {...register("firstName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
            type="text"
            class="form-control"
            placeholder="First name"
            aria-label="First name"
          />
          <span>
            {errors?.firstName?.type === "required" && (
              <p class="alert alert-danger p-firstname" role="alert">
                {" "}
                This field is required
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
              //   onChange={(event) => validEmail(event)}
              {...register("mail", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              })}
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
