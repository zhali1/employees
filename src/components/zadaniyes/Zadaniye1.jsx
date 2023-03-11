import React, { Component } from "react";

class Zadaniye1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      inc: "+++",
      dec: "---",
    };
  }
  nextYear = () => {
    this.setState((state) => ({
      years: state.years + 1,
    }));
  };
  beforeYear = () => {
    this.setState((state) => ({
      years: state.years - 1,
    }));
  };
  render() {
    const { name, surname } = this.props;
    return (
      <div>
        <button onClick={this.nextYear}> {this.state.inc}</button>
        <button onClick={this.beforeYear}> {this.state.dec}</button>
        <h1>
          My name is {name}, surname - {surname}, age - {this.state.years}
        </h1>
      </div>
    );
  }
}

export default Zadaniye1;
