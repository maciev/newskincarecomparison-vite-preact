import "./app.css";
import { Homescreen } from "../pages/Homescreen/Homescreen";
import Router, { Route } from "preact-router";
import { Productpage } from "../pages/Productpage/Productpage";

export function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Homescreen} />
        <Route path="/product" component={Productpage} />
      </Router>
    </>
  );
}

//need to add productName to state?
//path="/:productName"
