import React from "react";

const TouristInfoCrard = props => {
  return (
    <div className="col-12 col-md-4">
      <div className="card">
        <img src={props.cards.img} className="card-img-top" />
        <div className="card-body">
          <h1 className="card-title"> {props.cards.name}</h1>
          <p className="card-text">{props.cards.text}</p>
          <a href={props.cards.url} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCrard;
