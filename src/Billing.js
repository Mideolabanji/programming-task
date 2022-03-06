import React from "react";
import Heading from "./Heading";

export default function Billing() {
  return (
    <div className="app-body">
      <Heading />
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
        </div>
      </div>
    </div>
  );
}
