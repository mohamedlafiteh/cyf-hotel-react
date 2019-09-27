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
  };

  clickSubmitHandler = event => {
    event.preventDefault();
    const { title, firstName, lastName, email } = this.state;
    if (
      title.length === 0 ||
      (firstName.length === 0 || lastName.length === 0 || email.length === 0)
    ) {
      return alert("please inter something");
    } else {
      this.props.submission(this.state);
    }
  };

  render() {
    return (
      <div>
        <tr>
          <td>
            <label for="title">Title</label>
            <input
              id="title"
              name="title"
              onChange={this.changeHandler}
              type="text"
              value={this.state.title}
              placeholder="title"
            />
          </td>
          <td>
            <label for="firstname">First Name</label>
            <input
              id="firstname"
              onChange={this.changeHandler}
              value={this.state.firstName}
              name="firstName"
              type="text"
              placeholder="firstName"
            />
          </td>
          <td>
            <label for="lastname">Last Name</label>

            <input
              id="lastname"
              onChange={this.changeHandler}
              value={this.state.lastName}
              name="lastName"
              type="text"
              placeholder="lastName"
            />
          </td>
          <td>
            <label for="email">Email</label>
            <input
              id="email"
              onChange={this.changeHandler}
              value={this.state.email}
              name="email"
              type="text"
              placeholder="email"
            />
          </td>

          <td>
            <label for="roomid">Room Id</label>

            <input
              id="roomid"
              onChange={this.changeHandler}
              value={this.state.roomId}
              name="roomId"
              type="text"
              placeholder="room id"
            />
          </td>

          <td>
            <label for="checkindate">Check In Date</label>
            <input
              id="checkindate"
              onChange={this.changeHandler}
              value={this.state.checkInDate}
              name="checkInDate"
              type="text"
              placeholder="check in date"
            />
          </td>
          <td>
            <label for="checkoutdate">Check Out Date</label>

            <input
              id="checkoutdate"
              onChange={this.changeHandler}
              value={this.state.checkOutDate}
              name="checkOutDate"
              type="text"
              placeholder="checkout date"
            />
          </td>

          <button onClick={this.clickSubmitHandler} type="submit">
            Submit
          </button>
        </tr>
      </div>
    );
  }
}

export default NewBooking;
