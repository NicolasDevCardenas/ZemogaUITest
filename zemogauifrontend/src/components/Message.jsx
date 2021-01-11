import React from "react";
import "../sass/App.scss";

const Message = ({ setmsg }) => {
  const hide = (e) => {
    e.preventDefault();
    setmsg(false);
  };
  return (
    <div className="bg-gray ">
      <div>
        <p className="text-25 m-0">Speak out. Be heard.</p>
        <p className="title m-0">
          <b>Be counted</b>
        </p>
      </div>
      <div className="d-flex items-center">
        <span className="text-msg">
          Rule of thump is a crowd sourced court of public opinion where anyone
          and everyone can speak out and speak freely. It's easy: You share your
          opinion, we analyze and put the data in a public report.
        </span>
        <img
          src={process.env.PUBLIC_URL + "/img/cancel.png"}
          alt="exit"
          onClick={hide}
        />
      </div>
    </div>
  );
};

export default Message;
