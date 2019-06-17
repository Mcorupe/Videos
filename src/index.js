import React from "react";
import ReactDOM from "react-dom";
import { env } from "./config";

import App from "./components/App";

ReactDOM.render(<App env={env} />, document.querySelector("#root"));
