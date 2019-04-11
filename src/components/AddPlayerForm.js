import React, { Component } from "react";
class AddPlayerForm extends Component {
  state = {
    value: ""
  };
  //update state onChange form filed
  handleValueChange = e => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  };
  //form submit function
  handelSubmit = e => {
    e.preventDefault();
    this.props.addPlayer(this.state.value);
    this.setState({ value: "" });
  };
  render() {
    // Controlled Components input filed update and form submit
    return (
      <form onSubmit={this.handelSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleValueChange}
          placeholder="Enter the new player name "
        />
        <input type="submit" placeholder="Add player " />
      </form>
    );
  }
}
export default AddPlayerForm;
