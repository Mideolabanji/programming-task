import React from "react";

export default function Completed() {
  return (
    <div className="app-body">
      <div className="card completed-card">
        <img
          className="icon"
          height="45"
          width="45"
          src="https://www.fontisto.com/assets/icons/svg/check.svg"
        />
        <div className="card-body">
          <h1 className="card-title">Purchase Completed</h1>
          <p className="card-text">
            Please check your email for details concerning this transaction
          </p>
          <a href="#" className="card-link">
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}
