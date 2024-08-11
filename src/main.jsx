import React from "react";
import ReactDOM from "react-dom/client";
import Applayout from "./ui/Applayout";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./services/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Applayout />
    </Provider>
  </React.StrictMode>
);
