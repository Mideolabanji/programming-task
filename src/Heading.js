import React from "react";

export default function Heading() {
  return (
    <div>
      <h1>Complete your Purchase</h1>
      <div className="headings">
        <ul>
          <li className="active">Personal Info</li>
          <li>Billing Info</li>
          <li>Confirm Payment</li>
        </ul>
        <hr />
        <hr className="second-hr" />
      </div>
    </div>
  );
}
