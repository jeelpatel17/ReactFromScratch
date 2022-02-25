import { Component } from "react";
import "./Box.css";

export default class Box extends Component {
  render() {
    return (
      <div
        onClick={this.props.changeColor}
        style={{ backgroundColor: this.props.bgc }}
        className="Box d-flex justify-content-center align-items-center"
      ></div>
    );
  }
}
