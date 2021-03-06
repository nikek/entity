import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App.jsx";
import { RouterProvider } from "./func/Router.js";

ReactDOM.render(
  <RouterProvider>
    <App />
  </RouterProvider>,
  document.getElementById("root")
);
