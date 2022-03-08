import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Completed() {
  return (
    <div className="app-body">
      <div className="card completed-card">
        <div className="card-body">
          <div className="icon">
            <FontAwesomeIcon icon={faCheck} color="#0AC880" size="3x" />
          </div>
          <h1 className="card-title">Purchase Completed</h1>
          <p className="card-text text">
            Please check your email for details concerning this transaction
          </p>
          <a href="/" className="card-link">
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}
