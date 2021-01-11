import React from "react";
import "../sass/App.scss";
import Header from "./Header";
import Footer from "./Footer";

const Auth = () => {
  return (
    <div>
      <Header page="1" />
      <div className="text-center">
        <h1>Log In</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Auth;
