import React, { Component } from "react";
import { render } from "react-dom";

class Button extends Component {
  render() {
    return <h1>Hello,anita!!!!!!</h1>;
  }
}

render(<Button />, window.document.getElementById("app"));
