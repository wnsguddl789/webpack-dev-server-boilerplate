import * as React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
console.log(container);
const root = container ? ReactDOMClient.createRoot(container) : undefined;
const isStrictMode = process.env.NODE_ENV === "production";

if (typeof root !== "undefined") {
  isStrictMode
    ? root.render(
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      )
    : root.render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
}
