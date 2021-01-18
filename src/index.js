import React from "react";
import ReactDOM from "react-dom";
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import "./styles/styles.scss";

const store = configureStore();

console.log(store.getState())
ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
