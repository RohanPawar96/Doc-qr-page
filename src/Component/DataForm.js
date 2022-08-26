import React from "react";
import {
  validName,
  validEmail,
  validContact,
} from "../Validation/validationForm";

function DataForm() {
  return (
    <div className="container">
      <div className="container">
        <h1 className="head-h1">
          Get your FREE 4Balance wellness guide curated by Ayurvedic doctors
        </h1>
        <p className="head-p">CUSTOMIZED . LONG TERM . NATURAL</p>
      </div>
      <form class="row">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="First name"
            aria-label="First name"
            required
            onChange={(event) => validName(event)}
          />
          <div class="valid-feedback">Looks good!</div>
          <div class="invalid-feedback">Please choose a username.</div>
        </div>
        <div className="form-flex">
          <div class="col">
            <input
              type="number"
              class="form-control"
              placeholder="Email"
              aria-label="Email"
              onChange={(event) => validEmail(event)}
              maxLength={10}
              required
            />
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please choose a username.</div>
          </div>
          <div class="col">
            <input
              type="email"
              class="form-control"
              placeholder="Contact"
              aria-label="Contact"
              onChange={(event) => validContact(event)}
              maxLength={10}
              required
            />
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}

export default DataForm;
