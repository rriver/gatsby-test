import React from "react";
import Link from "gatsby-link";

class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>Press + or - to add 5 to the count.</p>
        <p>Current count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count +
          1 * 5 })}>+</button>
        <button onClick={() => this.setState({ count: this.state.count -
          1 * 5 })}>-</button>
      </div>
    )
  }
}

export default Counter;
