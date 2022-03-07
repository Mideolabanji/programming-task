import React from "react";
import Heading from "./Heading";

export default function Completed() {
  return (
    <div className="app-body">
      <div className="card completed-card">
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
