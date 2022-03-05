import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormInputs from "./FormInputs";

function App() {
  return (
    <div className="App">
      <div className="app-body">
        <h1>Complete your Purchase</h1>
        <div className="headings">
          <a href="#">
            <h3>Personal Info</h3>
          </a>
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

export default App;
