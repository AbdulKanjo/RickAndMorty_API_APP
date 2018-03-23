import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import Character from "./Components/Character/Character";
import FavCharacter from "./Components/FavCharacter/FavCharacter";
import Header from "./Components/Header/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      favorites: [],
      pageSwitch: false
    };
    this.favCharacter = this.favCharacter.bind(this);
    this.updateCharacter = this.updateCharacter.bind(this);
    this.deleteCharacter = this.deleteCharacter.bind(this);
    this.showCharacters = this.showCharacters.bind(this);
    this.showFavCharacters = this.showFavCharacters.bind(this);
  }

  componentDidMount() {
    axios.get("/api/characters").then(res => {
      this.setState({
        characters: res.data
      });
    });
  }

  favCharacter(name, id, image) {
    axios.post(`/api/characters/${id}`, { name, image }).then(res => {
      this.setState({
        characters: res.data[0],
        favorites: res.data[1]
      });
    });
  }

  updateCharacter(id, name) {
    axios.put(`/api/characters/${id}`, { name }).then(res => {
      this.setState({
        characters: res.data
      });
    });
  }

  deleteCharacter(id) {
    axios.delete(`/api/characters/${id}`).then(res => {
      this.setState({
        characters: res.data
      });
    });
  }

  showCharacters() {
    this.setState({
      pageSwitch: false
    });
  }

  showFavCharacters() {
    this.setState({
      pageSwitch: true
    });
  }

  render() {
    const { characters, pageSwitch, favorites } = this.state;
    let characterList = characters.map(character => {
      return (
        <Character
          key={character.id}
          id={character.id}
          name={character.name}
          image={character.image}
          favCharacter={this.favCharacter}
          updateCharacter={this.updateCharacter}
          deleteCharacter={this.deleteCharacter}
        />
      );
    });
    let favoriteList = favorites.map(character => {
      return (
        <FavCharacter
          key={character.id}
          id={character.id}
          name={character.name}
          image={character.image}
        />
      );
    });
    return (
      <div>
        <Header
          showCharacters={this.showCharacters}
          showFavCharacters={this.showFavCharacters}
        />
        {!pageSwitch ? <h3>{characterList}</h3> : <h3>{favoriteList}</h3>}
      </div>
    );
  }
}

export default App;
