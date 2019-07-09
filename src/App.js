import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./headings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

const cardInfo = [
  {
    img:
      "https://lonelyplanetwp.imgix.net/2019/04/GettyImages-523747989-5b0eef0d27ab.jpg",
    name: "Glasgow",
    url: "https://www.peoplemakeglasgow.com",
    text:
      "Glasgow is the largest city in Scotland, and third most populous settlement."
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Manchester_Town_Hall_October_2010.jpg/1200px-Manchester_Town_Hall_October_2010.jpg",
    name: "Manchester",
    url: "https://visitmanchester.com",
    text: "Manchester is a city and metropolitan borough in Greater Manchester"
  },
  {
    img: "/images/london.jpg",
    name: "London",
    url: "https://visitlondon.com.com",
    text:
      "London is the capital and most populous city of England and the United Kingdom."
  }
];
const App = () => {
  return (
    <div className="container">
      <Heading />
      <div className="row">
        {cardInfo.map((item, index) => {
          return <TouristInfoCards cards={item} key={index} />;
        })}
      </div>
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
