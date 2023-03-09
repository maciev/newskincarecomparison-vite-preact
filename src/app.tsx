import "./app.css";
import { Homescreen } from "../pages/Homescreen/Homescreen";
import { Route, Switch, useRoute } from "wouter";
import { Productpage } from "../pages/Productpage/Productpage";
import { createContext } from "preact";

export function App() {
  const [match, params] = useRoute("/products/:productname");

  return (
    <>
      {/*<AppState.Provider value={createAppState().products.value.price}>*/}
      <Switch>
        <Route path="/" component={Homescreen} />
        //have provider feed in data for params
        {/*<Route path="/products/:productname" component={Productpage}>
          {(params) => {
            {
              productname: "test";
            }
          }}
        </Route>*/}
      </Switch>

      {/*</AppState.Provider>*/}
    </>
  );
}
