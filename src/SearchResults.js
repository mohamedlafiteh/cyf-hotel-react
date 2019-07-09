import React from "react";
import Moment from "moment";
import { genericTypeAnnotation } from "@babel/types";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ""
    };
  }

  //console.log(props);
  render() {
    return (
      <div>
        <h1>Search results</h1>
        <table className="table">
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
              <th>Days</th>
            </tr>
          </thead>
          <tbody>
            {this.props.bookingList.map(item => {
              return (
                <tr>
                  <td>{item.id} </td>
                  <td>{item.title}</td>
                  <td>{item.firstName}</td>
                  <td>{item.surname}</td>
                  <td>{item.email}</td>
                  <td>{item.roomId}</td>
                  <td>{item.checkInDate}</td>
                  <td>{item.checkOutDate}</td>
                  <td>
                    {Moment(item.checkOutDate).diff(
                      Moment(item.checkInDate),
                      "days"
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default SearchResults;
