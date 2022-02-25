import { Component } from "react";

export default class Coin extends Component {
  render() {
    return (
      <img
        className={`my-5 ${this.props.flipping ? "animate" : ""}`}
        height="180px"
        width="180px"
        alt="coin"
        src={
          this.props.side
            ? "https://upload.wikimedia.org/wikipedia/en/8/8a/Quarter_Obverse_2010.png"
            : "https://upload.wikimedia.org/wikipedia/en/3/37/Quarter_Reverse_2010.png"
        }
      />
    );
  }
}
