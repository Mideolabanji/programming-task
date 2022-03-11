import React from "react";
import { Link } from "react-router-dom";

export default function Billing() {
  return (
    <div className="billing app-body">
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
      <div className="card mt-5 card">
        <div className="card-header header-card">
          <div className="row">
            <div className="col-8">
              <div>Item Name</div>
            </div>
            <div className="col-4">
              <div>
                <span className="naira-symbol">₦</span> Price
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-8">
              <ul>
                <li>Data science and usability</li>
                <li className="mt-5">Shipping</li>
              </ul>
            </div>
            <div className="col-4">
              <ul className="right-ul">
                <li className="data-fee">50,000.00</li>
                <li className="mt-5 shipping">0.00</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row total-row mb-4">
            <div className="col-8">
              <ul className="total-ul">
                <li>Total</li>
              </ul>
            </div>
            <div className="col-4">
              <ul className="right-ul total-ul">
                <li className="data-fee">50,000.00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Link to="/completed">
          <button type="submit" className="btn btn-lg mt-5 ms-2 next-btn">
            Pay
          </button>
        </Link>
        <a href="/">
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
