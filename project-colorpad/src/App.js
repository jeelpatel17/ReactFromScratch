import { Component } from "react";
import Octapad from "./components/Octapad";
import "./style.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Octapad />
      </div>
    );
  }
}
