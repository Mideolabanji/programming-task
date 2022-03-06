import React from "react";
import Heading from "./Heading";
import { Link } from "react-router-dom";

export default function Next() {
  return (
    <div className="app-body">
      <Heading />
      <form>
        <div className="mb-5 mt-5">
          <label for="exampleFormControlTextarea1" className="form-label mb-3">
            Name on Card <span className="required"> *</span>
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="exampleFormControlTextarea1"
            placeholder="Opara Linus Ahmed"
          />
        </div>
        <div className="mb-5">
          <label for="inputState" className="form-label mb-3">
            Card Type <span className="required"> *</span>
          </label>
          <select
            id="inputState"
            className="form-select form-select-lg select-input"
            defaultValue
          >
            <option>Visa</option>
            <option>...</option>
          </select>
        </div>
        <div className="row">
          <div className="col-6">
            <label
              for="exampleFormControlTextarea1"
              className="form-label mb-3"
            >
              Card Details <span className="required"> *</span>
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleFormControlTextarea1"
              placeholder="44960 44960 44960 44960"
            />
          </div>
          <div className="col-4">
            <label
              for="exampleFormControlTextarea1"
              className="form-label mb-3"
            >
              Expiry Date <span className="required"> *</span>
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleFormControlTextarea1"
              placeholder="04 / 23"
            />
          </div>
          <div className="col-2">
            <label
              for="exampleFormControlTextarea1"
              className="form-label mb-3"
            >
              CVV <span className="required"> *</span>
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleFormControlTextarea1"
              placeholder="923"
            />
          </div>
        </div>
        <footer>
          <Link to="/next">
            <button type="submit" className="btn btn-lg mt-5 ms-2 next-btn">
              Next
            </button>
          </Link>
          <a href="#">
            <button
              type="button"
              className="btn btn-link cancel-payment-link btn-lg mt-5"
            >
              Cancel Payment
            </button>
          </a>
        </footer>
      </form>
    </div>
  );
}
