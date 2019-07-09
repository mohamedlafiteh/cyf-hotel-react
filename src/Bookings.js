import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import SearchResults from "./SearchResults.js";
import fakeBookings from "./data/fakeBookings.json";

class Bookings extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    fetch("https://cyf-react.glitch.me/error")
      .then(res => res.json())
      .then(dataRes => {
        this.setState({
          data: dataRes
        });
        this.setState({
          isLoading: false
        });
      })
      .catch(res => console.log("Big error"));
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

  render() {
    if (this.state.isLoading) {
      return <p>Is Loading enjoy your coffee</p>;
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
          </div>
        </div>
      );
    }
  }
}

export default Bookings;
