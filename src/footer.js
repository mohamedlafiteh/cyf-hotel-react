import React from "react";
const info = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const Footer = () => {
  return (
    <ul className="footer">
      {info.map(function(string, index) {
        return <li key={index}> {string}</li>;
      })}
    </ul>
  );
};

export default Footer;
