import { Component } from "react";
import RollDice from "./components/RollDice";
import "./style.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <RollDice />
      </>
    );
  }
}
