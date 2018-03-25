import React from "react";
import "./Header.css";

const Header = ({ showCharacters, showFavCharacters }) => {
  return (
    <header className="header">
      <img
        className="header-icon"
        src="Rick_And_Morty_logo,png"
        alt="Fix Logo"
      />
      <h1>Select Your favortite Charickter</h1>
      <div className="btnContainer">
        <button className="Btn" onClick={showCharacters}>
          All
        </button>
      </div>
      <div className="btnContainer">
        <button className="Btn" onClick={showFavCharacters}>
          Favs
        </button>
      </div>
    </header>
  );
};

export default Header;
