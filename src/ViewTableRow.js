import React from "react";
import Moment from "moment";

const ViewTableRow = ({
  id,
  title,
  firstName,
  surname,
  email,
  roomId,
  checkInDate,
  checkOutDate,
  editRow
}) => {
  return (
    <tr>
      <td>{id} </td>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{Moment(checkOutDate).diff(Moment(checkInDate), "days")}</td>
      <td>
        <button onClick={() => editRow(id)}>Edit</button>
      </td>
    </tr>
  );
};

export default ViewTableRow;
