import "./app.css";
import { Homescreen } from "../pages/Homescreen/Homescreen";
import Router from "preact-router";
import { Productpage } from "../pages/Productpage/Productpage";

export function App() {
  return (
    <>
      <Router url="/">
        <Homescreen />
      </Router>
      {/*<Router
        url="/product
      "
      >
        <Productpage />
      </Router>*/}
    </>
  );
}

//need to add productName to state?
//path="/:productName"
