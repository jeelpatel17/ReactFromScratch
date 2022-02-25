import { Component } from "react";

export default class Die extends Component {
  numbers = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
  };
  getNum() {
    for (let number in this.numbers) {
      if (Number(number) === this.props.num) {
        return this.numbers[number];
      }
    }
  }
  render() {
    return (
      <i
        className={`fa-solid ${
          this.props.rolling ? "animate" : ""
        } dice mx-5 fa-dice-${this.getNum()}`}
      ></i>
    );
  }
}
