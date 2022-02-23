import { Component } from "react";
import Die from "./Die";

export default class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dieNo: 1,
      dieNo2: 1,
      rolling: false,
    };
    this.roll = this.roll.bind(this);
  }
  roll = (e) => {
    this.setState({ rolling: true });
    setTimeout(() => {
      this.setState({
        dieNo: Math.round(Math.random() * 5 + 1),
        dieNo2: Math.round(Math.random() * 5 + 1),
      });
    }, 500);
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column mt-5">
        <div className={`d-flex`}>
          <Die num={this.state.dieNo} rolling={this.state.rolling} />
          <Die num={this.state.dieNo2} rolling={this.state.rolling} />
        </div>
        <button
          className="btn btn-dark rounded px-5 py-3 my-5"
          onClick={this.roll}
          disabled={this.state.rolling}
        >
          {/* Roll Dice! */}
          {this.state.rolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}
