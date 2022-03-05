import React from "react";

export default function FormInputs() {
  return (
    <div>
      <form>
        <div className="mb-5 mt-5">
          <label for="exampleFormControlTextarea1" className="form-label mb-3">
            Name
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="exampleFormControlTextarea1"
            placeholder="Opara Linus Ahmed"
          />
        </div>
        <div className="mb-5">
          <label for="exampleFormControlInput1" className="form-label mb-3">
            Email address <span className="required"> *</span>
          </label>
          <input
            type="email"
            className="form-control form-control-lg"
            id="exampleFormControlInput1"
            placeholder="OparaLinusAhmed@devmail.com"
            required
          />
        </div>
        <div className="mb-5">
          <label for="exampleFormControlTextarea1" className="form-label mb-3">
            Address 1
          </label>
          <div className="form-text mb-3">
            The purchase receipt would be sent to this address
          </div>
          <input
            type="text"
            className="form-control form-control-lg"
            id="exampleFormControlTextarea1"
            placeholder="The address of the user goes here"
          />
        </div>
        <div className="mb-5">
          <label for="exampleFormControlTextarea1" className="form-label mb-3">
            Address 2
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="exampleFormControlTextarea1"
            placeholder="and here"
          />
        </div>
        <div className="row">
          <div className="col-7">
            <label
              for="exampleFormControlTextarea1"
              className="form-label mb-3"
            >
              Local Government
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleFormControlTextarea1"
              placeholder="Surulere"
            />
          </div>
          <div className="col-5">
            <label
              for="exampleFormControlTextarea1"
              className="form-label mb-3"
            >
              State
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleFormControlTextarea1"
              placeholder="Lagos"
            />
          </div>
        </div>
      </form>
      <footer>
        <a href="#">
          <button type="submit" className="btn btn-lg mt-5 ms-2 next-btn">
            Next
          </button>
        </a>
        <a href="#">
          <button
            type="button"
            className="btn btn-link cancel-payment-link btn-lg mt-5"
          >
            Cancel Payment
          </button>
        </a>
      </footer>
    </div>
  );
}