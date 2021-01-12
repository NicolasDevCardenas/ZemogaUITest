import React, { useEffect, useState } from "react";
import { getCall, postCall } from "../api/Api";
import "../sass/App.scss";

const Header = () => {
  const [important, setimportant] = useState([]);
  const [alreadyVote, setalreadyVote] = useState(false);

  useEffect(() => {
    getImportant();
  }, []);
  const getImportant = async () => {
    try {
      const response = await getCall("http://localhost:4000/important");
      if (!response.data) {
        return;
      }
      setimportant(response.data);
    } catch (err) {}
  };

  const vote = async (id, thump) => {
    const req = {
      id: id,
      thump: thump,
    };
    try {
      const response = await postCall("http://localhost:4000/thump", req);
      if (!response.data || response.data.code === 1) {
        return;
      }
      setalreadyVote(true);
    } catch (err) {}
  };
  return (
    <div className="container col-6">
      <div>
        <div className="padding-box">
          <p className="m-0">What's your opinion on</p>
          <p className="title">{important.name}</p>
          <p className="text-25">{important.description}</p>
          <a href={important.wiki} target="_blank" rel="noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/img/wiki.png`}
              alt="wiki"
              className="wiki"
            />
            <span> More information</span>
          </a>
          <p>
            <b className="text-bold">
              {alreadyVote ? "Thanks for voting!" : "What's Your Veredict?"}
            </b>
          </p>
        </div>
        {!alreadyVote && (
          <div className="d-flex">
            <div
              className="thump up btn"
              onClick={(e) => {
                e.preventDefault();
                vote(important.id, "0");
              }}
            >
              <img src={process.env.PUBLIC_URL + "/img/thumpup.png"} alt="" />
            </div>
            <div
              className="thump down btn"
              onClick={(e) => {
                e.preventDefault();
                vote(important.id, "1");
              }}
            >
              <img src={process.env.PUBLIC_URL + "/img/thumpdown.png"} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
