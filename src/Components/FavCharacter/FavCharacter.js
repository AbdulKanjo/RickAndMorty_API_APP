import React, { Component } from "react";
import "./FavCharacter.css";

class favCharacter extends Component {
  constructor(props) {
    super();
    this.state = {
      name: props.name,
      image: props.image,
      id: props.id
    };
  }

  render() {
    const { name, image, id } = this.state;
    const { removeFavCharacter } = this.props;
    return (
      <div className="cards">
        <h3 className="cardName">{name}</h3>
        <img className="imageContainer" src={image} alt="Character Pic" />
        <button
          className="removeBtn"
          onClick={() => removeFavCharacter(name, id, image)}
        >
          Remove
        </button>
      </div>
    );
  }
}

export default favCharacter;
