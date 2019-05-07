import React, { Component } from "react";
import map from "./usa-map.svg";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="class-name">content goes here</div>;
        <img className="usa-map" src={map} />
      </div>
    );
  }
}
