import React, { Component } from "react";

class Counter extends Component {
  state = { number: 0, fixedNumber: 0 };
  render() {
    const { number, fixedNumber } = this.state; //state를 조회할 때는 this.state로 조회한다.

    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값:{fixedNumber}</h2>
        <button
          onClick={() => {
            //this.setState를 사용하여 stzte에 새로운 값을 넣을 수 있음.
            this.setState((prevState) => {
              return { number: number + 1 };
            });
            this.setState((prevState) => ({ number: prevState.number + 1 }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
