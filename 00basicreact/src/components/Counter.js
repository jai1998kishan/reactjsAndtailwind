import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    //if we don't use setState than the UI is not going to update
    // this.state.count = this.state.count + 1;
    // console.log(this.state.count);

    //using setState it working
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Callback value", this.state.count);
      }
    );
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>

        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
