import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// react-router-dom
import { HashRouter } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./store/index.js";

//El App es incluido en el contesto global y dentro de las rutas
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
