import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import store from "./app/store";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
