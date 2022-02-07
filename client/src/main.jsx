import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import { TransactionProvider } from "./context/TransactionContext";

ReactDOM.render(
  <Router>
    <TransactionProvider>
      {/**Remove transaction provider at later stage */}
      <MoralisProvider>
        <App />
      </MoralisProvider>
    </TransactionProvider>{" "}
    {/**Remove transaction provider at later stage */}
  </Router>,
  document.getElementById("root")
);
