import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Button from "./button";
import Heading from "./headings";
import TouristInfoCards from "./touristCard";
import Footer from "./footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards
        img="Kelvingrove.jpg"
        name="Glasgow"
        url="https://www.peoplemakeglasgow.com"
        text="Glasgow is the largest city in Scotland, and third most populous
        settlement."
      />
      <TouristInfoCards
        img="Kelvingrove.jpg"
        name="Manchester"
        url="https://visitmanchester.com"
        text="Manchester is a city and metropolitan borough in Greater Manchester"
      />
      <TouristInfoCards
        img="Kelvingrove.jpg"
        name="London"
        url="https://visitlondon.com.com"
        text="London is the capital and most populous city of England and the United Kingdom."
      />
      <Bookings />
      <Button />
      <Footer />
    </div>
  );
};

export default App;
