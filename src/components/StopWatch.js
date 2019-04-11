import React, { Component } from "react";
import { runInThisContext } from "vm";

export default class StopWatch extends Component {
  state = {
    isRunning: false,
    previousTime: 0,
    elapsedTime: 0
  };
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 100);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState(prevState => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
      }));
    }
  };

  handleStopWatch = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }));
    if (!this.state.isRunning) {
      this.setState({ previousTime: Date.now() });
    }
  };

  handleReset = () => {
    this.setState({ elapsedTime: 0 });
  };
  render() {
    const seconds = Math.floor(this.state.elapsedTime / 1000);
    return (
      <div className="stopwatch">
        <h2>Stop Watch</h2>
        <span className="stopwatch-time">{seconds}</span>
        <button onClick={this.handleStopWatch}>
          {this.state.isRunning ? "Stop" : "start"}
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
