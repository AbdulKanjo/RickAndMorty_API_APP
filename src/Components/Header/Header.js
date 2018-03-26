import React from "react";
import "./Header.css";

const Header = ({ showCharacters, showFavCharacters }) => {
  return (
    <header className="header">
      <img
        className="header-icon"
        src="https://vignette.wikia.nocookie.net/rickandmorty/images/c/c8/Rick_and_Morty_logo.png/revision/latest?cb=20160907114210"
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
