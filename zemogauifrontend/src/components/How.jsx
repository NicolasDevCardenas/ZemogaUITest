import React from "react";
import "../sass/App.scss";
import Header from "./Header";
import Footer from "./Footer";

const How = () => {
  return (
    <div>
      <Header page="1" />
      <div className="text-center container">
        <h1>How it Wors</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          quo, ea consequatur aliquid sapiente laudantium ipsum laborum soluta
          perferendis velit molestias, ipsam quis, distinctio perspiciatis vel
          quod? Ea, doloremque dicta!, Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Numquam ducimus quos perspiciatis magnam sint, neque
          minima facilis omnis necessitatibus, fugit, reiciendis quia odio
          dolorum natus dolore eum at? Amet, repellat!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default How;
