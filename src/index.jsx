import { h, render } from "preact";
import Router from "preact-router";

import { Home } from "./Home";

render(
  <Router>
    <Home path="/" />
  </Router>,
  document.body
);
