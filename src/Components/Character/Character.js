import React, { Component } from "react";
import "./Character.css";

class Character extends Component {
  constructor(props) {
    super();
    this.state = {
      id: props.id,
      name: props.name,
      image: props.image,
      tempName: props.name,
      inputFlag: false
    };
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch() {
    this.setState({
      inputFlag: !this.state.inputFlag
    });
  }

  handleName(val) {
    this.setState({
      tempName: val
    });
  }

  handleConfirm() {
    const { updateCharacter, id } = this.props;
    const { name, tempName } = this.state;
    updateCharacter(id, name);
    this.setState({
      inputFlag: !this.state.inputFlag,
      name: tempName
    });
  }

  render() {
    const { inputFlag, id, name, image } = this.state;
    const { favCharacter, deleteCharacter } = this.props;
    return (
      <div className="cards">
        {!inputFlag ? (
          <div>
            <div className="cardName">
              <h3>{name}</h3>
            </div>
            <img className="imageContainer" src={image} alt="Character Pic" />
            <div className="cardBtnContainer">
              <button className="cardBtn edit" onClick={this.handleSwitch}>
                Edit
              </button>
              <button
                className="cardBtn delete"
                onClick={() => deleteCharacter(id)}
              >
                Delete
              </button>
              <button
                className="cardBtn fav"
                onClick={() => favCharacter(name, id, image)}
              >
                Fav
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="cardName">
              <input
                className="editNameInput"
                placeholder="Enter New Name"
                onChange={e => this.handleName(e.target.value)}
              />
            </div>
            <img className="imageContainer" src={image} alt="Character Pic" />
            <div className="cardBtnContainer">
              <button
                className="editCardBtn delete"
                onClick={this.handleSwitch}
              >
                Cancel
              </button>
              <button className="editCardBtn edit" onClick={this.handleConfirm}>
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Character;
