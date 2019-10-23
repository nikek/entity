import { h, render } from "https://unpkg.com/preact@latest?module";
import htm from "https://unpkg.com/htm@latest?module";
import { App } from "./components/App.js";

export const html = htm.bind(h);

render(h(App, { page: "All" }, null), document.getElementById("root"));
