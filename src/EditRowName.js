import React, { Component } from "react";
import Moment from "moment";

export default class EditRowName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleEdit: props.title,
      firstNameEdit: props.firstName,
      surnameEdit: props.surname,
      emailEdit: props.email,
      roomIdEdit: props.roomId,
      checkInDateEdit: props.checkInDate,
      checkOutDateEdit: props.checkOutDate
    };
  }
  handleChange = e => {
    this.setState({
      [`${e.target.name}Edit`]: e.target.value
    });
  };

  saveRow = () => {
    this.props.saveRow(
      this.props.id,
      this.state.titleEdit,
      this.state.firstNameEdit,
      this.state.surnameEdit,
      this.state.emailEdit,
      this.state.roomIdEdit,
      this.state.checkInDateEdit,
      this.state.checkOutDateEdit
    );
  };
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>
          <label for="title">Title</label>
          <input
            id="title"
            type="text"
            onChange={this.handleChange}
            name="title"
            value={this.state.titleEdit}
          />{" "}
        </td>
        <td>
          <label for="firstname">First Name</label>
          <input
            id="firstname"
            type="text"
            onChange={this.handleChange}
            name="firstName"
            value={this.state.firstNameEdit}
          />{" "}
        </td>
        <td>
          <label for="surname">Last Name</label>
          <input
            id="surname"
            type="text"
            onChange={this.handleChange}
            name="surname"
            value={this.state.surnameEdit}
          />{" "}
        </td>
        <td>
          <label for="email">Email</label>
          <input
            id="email"
            type="text"
            onChange={this.handleChange}
            name="email"
            value={this.state.emailEdit}
          />{" "}
        </td>
        <td>
          <label for="roomId">roomId</label>
          <input
            id="roomId"
            type="text"
            onChange={this.handleChange}
            name="roomId"
            value={this.state.roomIdEdit}
          />{" "}
        </td>

        <td>
          <label for="checkindate">Check In</label>
          <input
            id="checkindate"
            type="text"
            onChange={this.handleChange}
            name="checkIn"
            value={this.state.checkInDateEdit}
          />{" "}
        </td>

        <td>
          <label for="checkoutdate">Check Out</label>
          <input
            id="checkoutdate"
            type="text"
            onChange={this.handleChange}
            name="checkOut"
            value={this.state.checkOutDateEdit}
          />{" "}
        </td>

        <td>{this.state.checkOutDate}</td>
        <td>
          {Moment(this.state.checkOutDate).diff(
            Moment(this.state.checkInDate),
            "days"
          )}
        </td>
        <td>
          <button onClick={this.saveRow}>Save</button>
        </td>
      </tr>
    );
  }
}
