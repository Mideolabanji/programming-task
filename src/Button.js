import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Button() {
  return (
    <Link to="/next">
      <button
        onClick={billingInfo}
        type="submit"
        className="btn btn-lg mt-5 ms-2 next-btn"
      >
        Next
      </button>
    </Link>
  );
}
