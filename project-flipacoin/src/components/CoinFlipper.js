import { Component } from "react";
import Coin from "./Coin";

export default class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side: 1,
      total: 0,
      heads: 0,
      tails: 0,
      flipping: false,
    };
    this.flip = this.flip.bind(this);
  }
  flip = () => {
    let randomSide = Math.round(Math.random() * 1);
    this.setState((st) => {
      return {
        side: randomSide,
        flipping: true,
        total: st.total + 1,
        heads: st.heads + (randomSide ? 1 : 0),
        tails: st.tails + (!randomSide ? 1 : 0),
      };
    });
    setTimeout(() => {
      this.setState({ flipping: false });
    }, 1000);
  };
  render() {
    return (
      <div className="d-flex flex-column align-items-center text-center">
        <Coin flipping={this.state.flipping} side={this.state.side} />
        <div>
          <h2 className="my-3">
            {this.state.side ? "It's Heads!" : "It's Tails!"}
          </h2>
          <h4 className="my-3">
            Flipped total {this.state.total} times. {this.state.heads} times
            heads and {this.state.tails} times tails.
          </h4>
        </div>
        <button
          className="btn btn-dark px-5 btn-lg"
          onClick={this.flip}
          disabled={this.state.flipping}
        >
          {this.state.flipping ? "Flipping..." : "Flip!"}
        </button>
      </div>
    );
  }
}
