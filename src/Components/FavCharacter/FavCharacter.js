import React, { Component } from "react";

class favCharacter extends Component {
  constructor(props) {
    super();
    this.state = {
      id: props.id,
      name: props.name,
      image: props.image
    };
  }

  render() {
    const { id, name, image } = this.state;
    return (
      <div>
        <h5>Id: {id}</h5>
        <h3>{name}</h3>
        <img src={image} alt="Character Pic" />
      </div>
    );
  }
}

export default favCharacter;
