import { Component } from "react";
import "./style.css";
import CoinFlipper from "./components/CoinFlipper";

export default class App extends Component {
  render() {
    return (
      <div className="d-flex flex-column align-items-center mt-5">
        <h1>Flip a coin! 🤑</h1>
        <CoinFlipper />
      </div>
    );
  }
}
