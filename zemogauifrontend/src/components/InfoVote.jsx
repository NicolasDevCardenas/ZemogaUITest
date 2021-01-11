import React from "react";
import "../sass/App.scss";

const InfoVote = () => {
  return (
    <div className="info-vote">
      <div className="state">
        <span>CLOSING IN</span>
      </div>
      <div className="countdown">
        <span>22 </span>
        <span className="thin">days</span>
      </div>
    </div>
  );
};

export default InfoVote;
