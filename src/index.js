import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Root from "./components/App/Root";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

ReactDOM.render((
  <BrowserRouter>
    <Root>
      <App />
    </Root>
  </BrowserRouter>
), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
