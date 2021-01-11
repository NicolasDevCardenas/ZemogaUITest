import React, { useState } from "react";
import "../sass/App.scss";
import Header from "./Header";
import BoxInfoHeader from "./BoxInfoHeader";
import InfoVote from "./InfoVote";
import Message from "./Message";
import VoteBox from "./VoteBox";
import NewName from "./NewName";
import Footer from "./Footer";

const Home = () => {
  const [msg, setmsg] = useState(true);
  return (
    <div>
      <Header />
      <section className="banner">
        <BoxInfoHeader />
        <div className="background-home">
          <InfoVote />
        </div>
      </section>
      <article className="container">
        {msg && <Message setmsg={setmsg} />}
        <p className="title py-40">Votes</p>
        <VoteBox />
        <NewName />
        <hr className="dotted" />
      </article>
      <Footer />
    </div>
  );
};

export default Home;
