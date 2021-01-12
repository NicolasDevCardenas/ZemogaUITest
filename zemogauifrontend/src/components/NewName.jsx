import React from "react";
import "../sass/App.scss";

const NewName = () => {
  return (
    <div className="new-name">
      <div className="col-8">
        <div>
          <span>Is there anyone else you would want us to add?</span>
        </div>
        <div>
          <a className="btn btn-submit" href="/NewPerson">
            Submit a Name
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewName;
