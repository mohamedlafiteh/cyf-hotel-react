import React from "react";
import Clock from "./Clock";
const Heading = () => {
  return (
    <div>
      <header className="App-header">CYF Hotel</header>
      <img
        className="App-logo"
        src="https://cdn.pixabay.com/photo/2016/12/13/14/56/stars-1904262_960_720.png"
      />
      <Clock />
    </div>
  );
};

export default Heading;
