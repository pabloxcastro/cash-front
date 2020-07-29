import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import App from "./pages/App";
import AddTranscation from "./pages/AddTransaction";

const Pagina404 = () => <div>Página 404</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/add" component={AddTranscation} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
