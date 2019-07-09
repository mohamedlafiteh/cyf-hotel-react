import React from "react";
import Orders from "./Orders";
import RestaurantBotton from "./RestaurantButton";
import { setServers } from "dns";
class Restaurant extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Restaurant Orders </h3>
        <Orders foodOrders="Pizza" />
        <Orders foodOrders="Salad" />
        />
      </div>
    );
  }
}

export default Restaurant;
