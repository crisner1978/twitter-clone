import AppProviders from "AppProviders";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/main.scss";

ReactDOM.render(
<AppProviders>
  <App />
</AppProviders>, document.getElementById("root"));
