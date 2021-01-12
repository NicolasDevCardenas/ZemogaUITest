import React, { useEffect, useState } from "react";
import "../sass/App.scss";
import { getCall, postCall } from "../api/Api";

const VoteBox = () => {
  const [votes, setvotes] = useState([]);
  const [thump, setthump] = useState("");
  const [idGlobal, setId] = useState("");
  const [alreadyVote, setalreadyVote] = useState("");

  useEffect(() => {
    getVotes();
  }, []);

  const selectVote = (id, thump) => {
    setthump(thump);
    setId(id);
  };
  const vote = async (id) => {
    const req = {
      id: id,
      thump: thump,
    };
    try {
      const response = await postCall("http://localhost:4000/thump", req);
      if (!response.data || response.data.code === 1) {
        return;
      }
      setalreadyVote(id);
    } catch (err) {}
  };
  const getVotes = async () => {
    try {
      const response = await getCall("http://localhost:4000/vote");
      if (!response.data) {
        return;
      }
      response.data.forEach((element) => {
        let total = element.likes + element.dislikes;
        let percentLike = (element.likes / total) * 100;
        let percentdisLike = (element.dislikes / total) * 100;
        element.percentLike = Math.round(percentLike);
        element.percentdisLike = Math.round(percentdisLike);
      });
      setvotes(response.data);
    } catch (err) {}
  };

  return (
    <div className="col-6-box">
      {votes.map((val, i) => {
        return (
          <div className="vote-box">
            <img
              src={`${process.env.PUBLIC_URL}/img/${val.img}.png`}
              alt=""
              width="100%"
            />
            <div className="text-vote-box">
              <div className="d-flex pb-40">
                {val.percentLike > val.percentdisLike ? (
                  <div className="thump up box mt-16">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/thumpup.png`}
                      alt=""
                    />
                  </div>
                ) : (
                  <div className="thump down box mt-16">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/thumpdown.png`}
                      alt=""
                    />
                  </div>
                )}
                <div className="px-10">
                  <p className="title">{val.name}</p>
                  <small>
                    <b>1 month ago </b>in Entetairnament
                  </small>
                  {alreadyVote !== val.id ? (
                    <div>
                      <p>{val.description}</p>
                      <div className="d-flex items-center">
                        <div
                          className={
                            idGlobal === val.id && thump === "0"
                              ? "thump up box mr-5 select"
                              : "thump up box mr-5"
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            selectVote(val.id, "0");
                          }}
                        >
                          <img
                            src={`${process.env.PUBLIC_URL}/img/thumpup.png`}
                            alt=""
                          />
                        </div>
                        <div
                          className={
                            idGlobal === val.id && thump === "1"
                              ? "thump down box mr-5 select"
                              : "thump down box mr-5"
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            selectVote(val.id, "1");
                          }}
                        >
                          <img
                            src={`${process.env.PUBLIC_URL}/img/thumpdown.png`}
                            alt=""
                          />
                        </div>
                        <div
                          className="btn-vote"
                          onClick={(e) => {
                            e.preventDefault();
                            vote(val.id);
                            setthump("");
                          }}
                        >
                          Vote now
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p>Thank you for voting!</p>
                      <div
                        className="btn-vote again"
                        onClick={(e) => {
                          e.preventDefault();
                          getVotes();
                          setalreadyVote("");
                          setthump("");
                        }}
                      >
                        Vote Again
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="percentage d-flex">
                <div
                  className="thumpup-percent d-flex items-center"
                  style={{ width: `${val.percentLike}%` }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/img/thumpup.png`}
                    alt=""
                    className="pr-5"
                  />
                  <span className="text-25">{val.percentLike}%</span>
                </div>
                <div
                  className="thumpdown-percent d-flex items-center"
                  style={{ width: `${val.percentdisLike}%` }}
                >
                  <span className="pr-5 text-25">{val.percentdisLike}%</span>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/thumpdown.png`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VoteBox;
