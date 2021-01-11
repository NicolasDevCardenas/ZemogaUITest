import React from "react";
import "../sass/App.scss";

const Footer = () => {
  return (
    <footer className="container">
      <nav>
        <ul className="mr-auto">
          <li className="pl-0">
            <a href="/">Terms and Conditions</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li></li>
        </ul>
        <ul>
          <li>
            <a href="/">Follow Us</a>
          </li>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/img/face.png"}
                alt="Facebook"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/img/twitter.png"}
                alt="Twitter"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
