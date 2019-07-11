import React, { Component } from "react";

export class NewBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      roomId: "",
      checkInDate: "",
      checkOutDate: ""
    };
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    // console.log(this.state.firstName);
  };

  clickSubmitHandler = event => {
    event.preventDefault();
    this.props.submission(this.state);
  };

  render() {
    return (
      <div>
        <form>
          <input
            name="title"
            onChange={this.changeHandler}
            type="text"
            value={this.state.title}
            placeholder="title"
          />
          <input
            onChange={this.changeHandler}
            value={this.state.firstName}
            name="firstName"
            type="text"
            placeholder="firstName"
          />
          <input
            onChange={this.changeHandler}
            value={this.state.lastName}
            name="lastName"
            type="text"
            placeholder="lastName"
          />
          <input
            onChange={this.changeHandler}
            value={this.state.email}
            name="email"
            type="text"
            placeholder="email"
          />

          <input
            onChange={this.changeHandler}
            value={this.state.roomId}
            name="roomId"
            type="text"
            placeholder="room id"
          />
          <input
            onChange={this.changeHandler}
            value={this.state.checkInDate}
            name="checkInDate"
            type="text"
            placeholder="check in date"
          />
          <input
            onChange={this.changeHandler}
            value={this.state.checkOutDate}
            name="checkOutDate"
            type="text"
            placeholder="checkout date"
          />
          <button onClick={this.clickSubmitHandler} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewBooking;
