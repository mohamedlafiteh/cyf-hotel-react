import React from "react";
import ViewTableRows from "./ViewTableRow";
import EditRowName from "./EditRowName";

class ViewTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.bookingList,
      selectedRowId: null
    };
  }

  editRow = id => {
    this.setState({
      selectedRowId: id
    });
  };
  saveRow = (
    id,
    title,
    firstName,
    surename,
    email,
    roomId,
    checkInDate,
    checkOutDate
  ) => {
    console.log("this is title" + title);
    console.log("this is id" + id);
    const newData = this.state.data.filter(row => row.id !== id);
    console.log("this is new data" + newData);
    const updatedData = {
      id,
      title,
      firstName,
      surename,
      email,
      roomId,
      checkInDate,
      checkOutDate
    };
    newData.splice(id - 1, 0, updatedData);
    this.setState({
      selectedRowId: null,
      data: newData
    });
    console.log(newData);
  };
  render() {
    return (
      <form>
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.bookingList.map(item => {
              if (item.id === this.state.selectedRowId) {
                return (
                  <EditRowName
                    id={item.id}
                    title={item.title}
                    firstName={item.firstName}
                    surname={item.surname}
                    email={item.email}
                    roomId={item.roomId}
                    checkInDate={item.checkInDate}
                    checkOutDate={item.checkOutDate}
                    saveRow={this.saveRow}
                  />
                );
              } else {
                return (
                  <ViewTableRows
                    id={item.id}
                    title={item.title}
                    firstName={item.firstName}
                    surname={item.surname}
                    email={item.email}
                    roomId={item.roomId}
                    checkInDate={item.checkInDate}
                    checkOutDate={item.checkOutDate}
                    editRow={this.editRow}
                  />
                );
              }
            })}
          </tbody>
        </table>
      </form>
    );
  }
}
export default ViewTable;
