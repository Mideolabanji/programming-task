import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Billing from "./Billing";

export default function Next() {
  const [formStep, setFormStep] = useState(1);
  const {
    register,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  function updateFormStep() {
    setFormStep(formStep + 1);
  }
  return (
    <div>
      {formStep === 2 && <Billing />}
      {formStep === 1 && (
        <div className="app-body">
          <h1>Complete your Purchase</h1>
          <div className="headings">
            <ul>
              <li>Personal Info</li>
              <li className="active">Billing Info</li>
              <li>Confirm Payment</li>
            </ul>
            <hr />
            <hr className="second-hr next-hr" />
          </div>
          <form>
            <div className="mb-5 mt-5">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label mb-3"
              >
                Name on Card <span className="required"> *</span>
              </label>
              <input
                type="text"
                name="nameOnCard"
                className="form-control form-control-lg"
                id="exampleFormControlTextarea1"
                placeholder="Opara Linus Ahmed"
                {...register("nameOnCard", { required: true })}
              />
              {errors.email && (
                <p className="required error-message">
                  Name on Card is required
                </p>
              )}
            </div>
            <div className="mb-5">
              <label htmlFor="inputState" className="form-label mb-3">
                Card Type <span className="required"> *</span>
              </label>
              <select
                id="inputState"
                name="cardType"
                className="form-select form-select-lg select-input"
                defaultValue
                {...register("cardType", { required: true })}
              >
                <option>Visa</option>
                <option>...</option>
              </select>
            </div>
            <div className="row">
              <div className="col-6">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label mb-3"
                >
                  Card Details <span className="required"> *</span>
                </label>
                <input
                  type="number"
                  name="cardDetails"
                  className="form-control form-control-lg"
                  id="exampleFormControlTextarea1"
                  placeholder="44960 44960 44960 44960"
                  {...register("cardDetails", { required: true })}
                />
                {errors.cardDetails && (
                  <p className="required error-message">
                    Card Detail is required
                  </p>
                )}
              </div>
              <div className="col-4">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label mb-3"
                >
                  Expiry Date <span className="required"> *</span>
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  className="form-control form-control-lg"
                  id="exampleFormControlTextarea1"
                  placeholder="04 / 23"
                  {...register("expiryDate", { required: true })}
                />
                {errors.expiryDate && (
                  <p className="required error-message">
                    Expiry date is required
                  </p>
                )}
              </div>
              <div className="col-2">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label mb-3"
                >
                  CVV <span className="required"> *</span>
                </label>
                <input
                  type="number"
                  name="cvv"
                  className="form-control form-control-lg"
                  id="exampleFormControlTextarea1"
                  placeholder="923"
                  {...register("cvv", { required: true })}
                />
                {errors.cvv && (
                  <p className="required error-message">CVV is required</p>
                )}
              </div>
            </div>
            <footer>
              <button
                disabled={!isValid}
                type="button"
                className="btn btn-lg mt-5 ms-2 next-btn"
                onClick={updateFormStep}
              >
                Next
              </button>
              <a href="/">
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
      )}
    </div>
  );
}
