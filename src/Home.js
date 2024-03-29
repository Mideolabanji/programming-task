import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Next from "./Next";

export default function FormInputs() {
  const [formStep, setFormStep] = useState(0);
  const {
    register,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  function updateFormStep() {
    setFormStep(formStep + 1);
  }

  return (
    <div>
      {formStep === 1 && <Next />}
      {formStep === 0 && (
        <div className="App app-body">
          <h1>Complete your Purchase</h1>
          <div className="headings">
            <ul>
              <li className="active">Personal Info</li>
              <li>Billing Info</li>
              <li>Confirm Payment</li>
            </ul>
            <hr />
            <hr className="second-hr home-hr" />
          </div>
          <form>
            <div className="mb-5 mt-5">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label mb-3"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                id="exampleFormControlTextarea1"
                placeholder="Opara Linus Ahmed"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label mb-3"
              >
                Email address <span className="required"> *</span>
              </label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="OparaLinusAhmed@devmail.com"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="required error-message">Email is required</p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label mb-3"
              >
                Address 1
              </label>
              <div className="form-text mb-3">
                The purchase receipt would be sent to this address
              </div>
              <input
                type="text"
                name="address 1"
                className="form-control form-control-lg"
                id="exampleFormControlTextarea1"
                placeholder="The address of the user goes here"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label mb-3"
              >
                Address 2
              </label>
              <input
                type="text"
                name="address 2"
                className="form-control form-control-lg"
                id="exampleFormControlTextarea1"
                placeholder="and here"
              />
            </div>
            <div className="row">
              <div className="col-7">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label mb-3"
                >
                  Local Government
                </label>
                <input
                  type="text"
                  name="local government"
                  className="form-control form-control-lg"
                  id="exampleFormControlTextarea1"
                  placeholder="Surulere"
                />
              </div>
              <div className="col-5">
                <label htmlFor="inputState" className="form-label mb-3">
                  State
                </label>
                <select
                  id="inputState"
                  className="form-select form-select-lg select-input"
                  defaultValue
                >
                  <option>Lagos</option>
                  <option>...</option>
                </select>
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
