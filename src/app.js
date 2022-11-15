// source goes here
import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./components/Home";

const app = function () {
  const root = createRoot(document.getElementById("root"));
  root.render(<Home />);
};

export default app;
