import React from "react";

const TouristInfoCrard = props => {
  return (
    <div className="card">
      <img src={props.img} className="card-img-top" />
      <div className="card-body">
        <h1 className="card-title"> {props.name}</h1>
        <p className="card-text">{props.text}</p>
        <a href={props.url} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
export default TouristInfoCrard;
