import React from "react";
import Bookings from "./Bookings";

const SearchResults = props => {
  //console.log(props);
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Room Id</th>
          <th>Check In</th>
          <th>Check Out</th>
        </tr>
      </thead>
      <tbody>
        <tr />
        <tr>
          <td>{props.booking.id}</td>
          <td>{props.booking.title}</td>
          <td>{props.booking.firstName}</td>
          <td>{props.booking.surname}</td>
          <td>{props.booking.email}</td>
          <td>{props.booking.roomId}</td>
          <td>{props.booking.checkInDate}</td>
          <td>{props.booking.checkOutDate}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SearchResults;
