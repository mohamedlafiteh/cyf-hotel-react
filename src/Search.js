import React from "react";
import Button from "./button";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: ""
    };
  }
  handleSearchInput = e => {
    this.setState({
      searchInput: e.target.value
    });
  };
  handelSubmit = e => {
    e.preventDefault();
    console.log("submit clicked");
    this.props.search(this.state.searchInput);
  };
  render() {
    return (
      <div className="search">
        <div className="page-header">
          <h4 className="text-left">Search Bookings</h4>
        </div>
        <div className="row search-wrapper">
          <div className="col">
            <form
              onSubmit={this.handelSubmit}
              className="form-group search-box"
            >
              <label htmlFor="customerName">Customer name</label>
              <div className="search-row">
                <input
                  onChange={this.handleSearchInput}
                  type="text"
                  id="customerName"
                  className="form-control"
                  placeholder="Customer Id"
                  value={this.state.searchInput}
                />
                <Button />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
