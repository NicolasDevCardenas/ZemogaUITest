import React from "react";
import "../sass/App.scss";

const Header = () => {
  return (
    <div className="container col-6">
      <div>
        <div className="padding-box">
          <p className="m-0">What's your opinion on</p>
          <p className="title">Pope Francis?</p>
          <p className="text-25">
            He's talking tough on clergy sexual abuse, but he is another papal
            pervert protector? (thumbs down) or a true pedophile punishing
            pontiff (thumps up)
          </p>
          <a href="/">More information</a>
          <p>
            <b className="text-bold">What's Your Veredict?</b>
          </p>
        </div>
        <div className="d-flex">
          <div className="thump up">
            <img src={process.env.PUBLIC_URL + "/img/thumpup.png"} alt="" />
          </div>
          <div className="thump down">
            <img src={process.env.PUBLIC_URL + "/img/thumpdown.png"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
