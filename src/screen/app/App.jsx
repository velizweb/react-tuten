import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landpage from "./../land-page";
import { SessionProvider } from "../../providers/session-context";

const App = () => (
  <BrowserRouter>
    <SessionProvider>
      <Switch>
        <Route path="/" component={Landpage} />
      </Switch>
    </SessionProvider>
  </BrowserRouter>
);

export default App;
