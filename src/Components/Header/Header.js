import React from "react";

const Header = ({ showCharacters, showFavCharacters }) => {
  return (
    <div>
      <button onClick={showCharacters}>All Characters</button>
      <button onClick={showFavCharacters}>Favorites</button>
    </div>
  );
};

export default Header;
