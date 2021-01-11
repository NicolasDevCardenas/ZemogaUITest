import React from "react";
import "../sass/App.scss";

const VoteBox = () => {
  return (
    <div className="col-6-box">
      <div className="vote-box">
        <img
          src={process.env.PUBLIC_URL + "/img/kanye.png"}
          alt=""
          width="100%"
        />
        <div className="text-vote-box">
          <div className="d-flex pb-40">
            <div className="thump up box mt-16">
              <img src={process.env.PUBLIC_URL + "/img/thumpup.png"} alt="" />
            </div>
            <div className="px-10">
              <p className="title">Kanye West</p>
              <small>
                <b>1 month ago </b>in Entetairnament
              </small>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                cum vero velit, facilis repellat.
              </p>
              <div className="d-flex items-center">
                <div className="thump up box vote mr-5">
                  <img
                    src={process.env.PUBLIC_URL + "/img/thumpup.png"}
                    alt=""
                  />
                </div>
                <div className="thump down box mr-5">
                  <img
                    src={process.env.PUBLIC_URL + "/img/thumpdown.png"}
                    alt=""
                  />
                </div>
                <div className="btn-vote">Vote now</div>
              </div>
            </div>
          </div>
          <div className="percentage d-flex">
            <div className="thumpup-percent d-flex items-center">
              <img
                src={process.env.PUBLIC_URL + "/img/thumpup.png"}
                alt=""
                className="pr-5"
              />
              <span className="text-25">50%</span>
            </div>
            <div className="thumpdown-percent d-flex items-center">
              <span className="pr-5 text-25">50%</span>
              <img src={process.env.PUBLIC_URL + "/img/thumpdown.png"} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="vote-box">
        <img
          src={process.env.PUBLIC_URL + "/img/kanye.png"}
          alt=""
          width="100%"
        />
        <div className="text-vote-box">
          <div className="d-flex pb-40">
            <div className="thump up box mt-16">
              <img src={process.env.PUBLIC_URL + "/img/thumpup.png"} alt="" />
            </div>
            <div className="px-10">
              <p className="title">Kanye West</p>
              <small>
                <b>1 month ago </b>in Entetairnament
              </small>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                cum vero velit, facilis repellat.
              </p>
              <div className="d-flex items-center">
                <div className="thump up box vote mr-5">
                  <img
                    src={process.env.PUBLIC_URL + "/img/thumpup.png"}
                    alt=""
                  />
                </div>
                <div className="thump down box mr-5">
                  <img
                    src={process.env.PUBLIC_URL + "/img/thumpdown.png"}
                    alt=""
                  />
                </div>
                <div className="btn-vote">Vote now</div>
              </div>
            </div>
          </div>
          <div className="percentage d-flex">
            <div className="thumpup-percent d-flex items-center">
              <img
                src={process.env.PUBLIC_URL + "/img/thumpup.png"}
                alt=""
                className="pr-5"
              />
              <span className="text-25">50%</span>
            </div>
            <div className="thumpdown-percent d-flex items-center">
              <span className="pr-5 text-25">50%</span>
              <img src={process.env.PUBLIC_URL + "/img/thumpdown.png"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoteBox;
