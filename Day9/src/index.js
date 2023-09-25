import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import App from "./App";
import './App.css';
import store from './Pages/Redux/store.jsx';
const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
