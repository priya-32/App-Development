import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Pages/store";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import App from "./App";
import './App.css';

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
