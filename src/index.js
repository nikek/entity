import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App.jsx";
import { RouterProvider } from "./Router.js";

ReactDOM.render(
  <RouterProvider>
    <App />
  </RouterProvider>,
  document.getElementById("root")
);
