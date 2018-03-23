import React, { Component } from "react";

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
      <div>
        {!inputFlag ? (
          <div>
            <div>
              <h3>{name}</h3>
              <button onClick={() => favCharacter(name, id, image)}>
                Favorite
              </button>
            </div>
            <img src={image} alt="Character Pic" />
            <button onClick={this.handleSwitch}>Edit</button>
            <button onClick={() => deleteCharacter(id)}>Delete</button>
          </div>
        ) : (
          <div>
            <h3>{name}</h3>
            <button onClick={() => favCharacter(name, id, image)}>
              Favorite
            </button>
            <img src={image} alt="Character Pic" />
            <input onChange={e => this.handleName(e.target.value)} />
            <button onClick={this.handleSwitch}>Cancel</button>
            <button onClick={this.handleConfirm}>Submit</button>
          </div>
        )}
      </div>
    );
  }
}

export default Character;
