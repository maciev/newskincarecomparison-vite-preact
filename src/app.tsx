import "./app.css";
import { Homescreen } from "../pages/Homescreen/Homescreen";
import { Route } from "wouter";
import { Productpage } from "../pages/Productpage/Productpage";
import { createContext } from "preact";

export function App() {
  return (
    <>
      {/*<AppState.Provider value={createAppState().products.value.price}>*/}

      <Route path="/product" component={Productpage} />
      <Route path="/" component={Homescreen} />

      {/*</AppState.Provider>*/}
    </>
  );
}

//need to add productName to state?
//path="/:productName"
