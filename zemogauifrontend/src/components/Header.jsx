import React, { useState } from "react";
import "../sass/App.scss";

const Header = ({ page }) => {
  const [menu, setmenu] = useState(false);
  const showMenu = (e) => {
    e.preventDefault();
    setmenu(true);
  };
  const closeMenu = (e) => {
    e.preventDefault();
    setmenu(false);
  };
  return (
    <header className="container">
      <nav className={page === "1" ? "black" : "white"}>
        <div>
          <a href="/">
            <h1>Rule of Thumb.</h1>
          </a>
        </div>
        <ul className={menu ? "menu show" : "menu hide"}>
          <li>
            <a href="/pastrials">Past Trials</a>
          </li>
          <li>
            <a href="/how">How it Works</a>
          </li>
          <li>
            <a href="/Auth">Log In/Sign Up</a>
          </li>
          <li>
            {page === "1" ? (
              <img
                src={`${process.env.PUBLIC_URL}/img/blackLoupe.png`}
                alt="loupe"
                className="loupe"
              />
            ) : (
              <img
                src={`${process.env.PUBLIC_URL}/img/loupe.png`}
                alt="loupe"
                className="loupe"
              />
            )}
          </li>
          <img
            src={`${process.env.PUBLIC_URL}/img/cancel.png`}
            alt="exit"
            onClick={closeMenu}
            className="exit"
          />
        </ul>
        <div className="burger-menu" onClick={showMenu}>
          <img src={`${process.env.PUBLIC_URL}/img/menu.png`} alt="Menu" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
