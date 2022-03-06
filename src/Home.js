import FormInputs from "./FormInputs";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
      <div className="app-body">
        <h1>Complete your Purchase</h1>
        <div className="headings">
          <Link to="/">
            <h3>Personal Info</h3>
          </Link>

          <a href="#">
            <h3>Billing Info</h3>
          </a>
          <a href="#">
            <h3>Confirm Payment</h3>
          </a>
        </div>
        <FormInputs />
      </div>
    </div>
  );
}
