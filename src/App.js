import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import Header from "./Components/Header/Header";
import Character from "./Components/Character/Character";
import FavCharacter from "./Components/FavCharacter/FavCharacter";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      favorites: [],
      pageSwitch: false,
      page: 2
    };
    this.favCharacter = this.favCharacter.bind(this);
    this.updateCharacter = this.updateCharacter.bind(this);
    this.deleteCharacter = this.deleteCharacter.bind(this);
    this.showCharacters = this.showCharacters.bind(this);
    this.showFavCharacters = this.showFavCharacters.bind(this);
    this.getNextPage = this.getNextPage.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/characters`).then(res => {
      this.setState({
        characters: res.data
      });
    });
  }

  getNextPage(page) {
    axios.get(`/api/characters/${page}`).then(res => {
      this.setState({
        characters: res.data,
        page: this.state.page + 1
      });
    });
    console.log(this.state.page);
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
    const { characters, pageSwitch, favorites, page } = this.state;
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
        <div className="bgImg">
          <main className="main">
            {!pageSwitch ? characterList : favoriteList}
          </main>
        </div>
        {!pageSwitch ? (
          <Footer getNextPage={this.getNextPage} page={page} />
        ) : null}
      </div>
    );
  }
}

export default App;
