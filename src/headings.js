import React from "react";
const imgStyle = {
  backgroundColor: `#f7901e`,
  height: `50px`,
  width: `2000px`,

  display: `inline - block`,
  overflow: `hidden`
};

const Heading = () => {
  return (
    <div>
      <header className="App-header">CYF Hotel</header>
      <img
        style={imgStyle}
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
      />
    </div>
  );
};

export default Heading;
