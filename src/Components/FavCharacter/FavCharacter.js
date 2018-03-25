import React, { Component } from "react";

class favCharacter extends Component {
  constructor(props) {
    super();
    this.state = {
      name: props.name,
      image: props.image
    };
  }

  render() {
    const { name, image } = this.state;
    return (
      <div className="favCards">
        <h3 className="cardName">{name}</h3>
        <img className="imageContainer" src={image} alt="Character Pic" />
      </div>
    );
  }
}

export default favCharacter;
