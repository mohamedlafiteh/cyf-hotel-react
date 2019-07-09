import React, { Component } from "react";
import RestaurantBotton from "./RestaurantButton";
export class Orders extends Component {
  constructor() {
    super();
    this.state = {
      orders: 0
    };
  }

  addOrder = () => {
    this.setState(prev => {
      return { orders: prev.orders + 1 };
    });
  };
  render() {
    return (
      <div>
        <ul>
          <li>
            {this.props.foodOrders}: {this.state.orders} {""}{" "}
            <RestaurantBotton handleClick={this.addOrder} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Orders;
