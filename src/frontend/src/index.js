import React from "react";
import ReactDOM from "react-dom";

const element = (
  <h1>
    Hello, Zhou Yang
  </h1>
);

const wrapper = document.getElementById('app');

wrapper ? ReactDOM.render(element, wrapper) : null;