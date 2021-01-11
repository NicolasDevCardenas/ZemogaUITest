import React from "react";
import "../sass/App.scss";

const NewName = () => {
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="new-name">
      <div className="col-8">
        <div>
          <span>Is there anyone else you would want us to add?</span>
        </div>
        <div>
          <button className="btn-submit" onClick={submit}>
            Submit a Name
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewName;
