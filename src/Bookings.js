import React from "react";
import Search from "./Search.js";
import ViewTable from "./ViewTable.js";

import NewBooing from "./NewBooking";

class Bookings extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          id: 1,
          title: "Mr",
          firstName: "John",
          surname: "Doe",
          email: "johndoe@doe.com",
          roomId: 2,
          checkInDate: "2017-11-21",
          checkOutDate: "2017-11-23"
        },
        {
          id: 2,
          title: "Doctor",
          firstName: "Sadia",
          surname: "Begum",
          email: "begum_sadia@sadia.org",
          roomId: 1,
          checkInDate: "2018-02-15",
          checkOutDate: "2018-02-28"
        },
        {
          id: 3,
          title: "Prince",
          firstName: "Henry",
          surname: "Wales",
          email: "harry@wales.com",
          roomId: 5,
          checkInDate: "2018-03-01",
          checkOutDate: "2018-04-09"
        },
        {
          id: 4,
          title: "Dame",
          firstName: "Judi",
          surname: "Dench",
          email: "Judi@dench.co.uk",
          roomId: 6,
          checkInDate: "2017-12-25",
          checkOutDate: "2018-01-03"
        },
        {
          id: 5,
          title: "Madam",
          firstName: "Anuradha",
          surname: "Selvam",
          email: "anu@selvam.net",
          roomId: 3,
          checkInDate: "2017-08-30",
          checkOutDate: "2017-10-02"
        }
      ],
      isLoading: false,
      error: ""
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     isLoading: true
  //   });
  //   fetch("https://cyf-react.glitch.me")
  //     .then(res => {
  //       if (res.status >= 200 && res.status < 300) {
  //         return res;
  //       } else {
  //         throw new Error("http errors");
  //       }
  //     })
  //     .then(res => res.json())
  //     .then(dataRes => {
  //       this.setState({
  //         data: dataRes,
  //         isLoading: false,
  //         error: ""
  //       });
  //     })
  //     .catch(err => {
  //       this.setState({
  //         error: err,
  //         isLoading: false,
  //         data: []
  //       });
  //     });
  // }
  search = searchVal => {
    // this.setState({
    //   data: !searchVal ? FakeBookings : FakeBookings.filter(booking => {
    //     return booking.id === Number(searchVal);
    //   })
    // });

    if (!searchVal) {
      this.setState({
        data: this.state.data
      });
    } else {
      const result = this.state.data.filter(booking => {
        return booking.firstName === searchVal || booking.surname === searchVal;
      });
      this.setState({
        data: result
      });
    }
  };
  newSubmission = newBooking => {
    console.log("this is new booking" + newBooking.title);

    this.setState(prevState => {
      prevState.data.push(newBooking);
      return {
        data: prevState.data
      };
    });
  };
  render() {
    // if (this.state.isLoading) {
    //   return <p>Is Loading enjoy your coffee</p>;
    // } else if (this.state.error) {
    //   return <p>{this.state.error.message}</p>;
    // } else {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />

          {this.state.data.length > 0 ? (
            <ViewTable bookingList={this.state.data} />
          ) : (
            <p>No Results</p>
          )}
          <NewBooing submission={this.newSubmission} />
        </div>
      </div>
    );
  }
}
// }

export default Bookings;
