import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import SearchResults from "./SearchResults.js";
import fakeBookings from "./data/fakeBookings.json";
import NewBooing from "./NewBooking";

class Bookings extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      isLoading: false,
      error: ""
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    fetch("https://cyf-react.glitch.me")
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res;
        } else {
          throw new Error("http errors");
        }
      })
      .then(res => res.json())
      .then(dataRes => {
        this.setState({
          data: dataRes,
          isLoading: false,
          error: ""
        });
      })
      .catch(err => {
        this.setState({
          error: err,
          isLoading: false,
          data: []
        });
      });
  }
  search = searchVal => {
    // this.setState({
    //   data: !searchVal ? FakeBookings : FakeBookings.filter(booking => {
    //     return booking.id === Number(searchVal);
    //   })
    // });

    if (!searchVal) {
      this.setState({
        data: fakeBookings
      });
    } else {
      const result = fakeBookings.filter(booking => {
        return booking.firstName === searchVal || booking.surname === searchVal;
      });
      this.setState({
        data: result
      });
    }
  };
  newSubmission = newBooking => {
    this.setState(prevState => {
      prevState.data.push(newBooking);
      return {
        data: prevState.data
      };
    });
  };
  render() {
    if (this.state.isLoading) {
      return <p>Is Loading enjoy your coffee</p>;
    } else if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    } else {
      return (
        <div className="App-content">
          <div className="container">
            <Search search={this.search} />

            {this.state.data.length > 0 ? (
              <SearchResults bookingList={this.state.data} />
            ) : (
              <p>No Results</p>
            )}
            <NewBooing submission={this.newSubmission} />
          </div>
        </div>
      );
    }
  }
}

export default Bookings;
