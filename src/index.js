import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Title from "./components/Title";
import GlobalStyle from "./styles/global";
import App from "./pages/App";
import AddTranscation from "./pages/AddTransaction";

const Pagina404 = () => <div>Página 404</div>;

ReactDOM.render(
  <BrowserRouter>
    <Title />
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/add" component={AddTranscation} />
      <Route component={Pagina404} />
    </Switch>
    <GlobalStyle />
  </BrowserRouter>,
  document.getElementById("root")
);
