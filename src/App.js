import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import Header from "./Components/Header/Header";
import Character from "./Components/Character/Character";
import FavCharacter from "./Components/FavCharacter/FavCharacter";
import Footer from "./Components/Footer/Footer";
import PickleRick from "./Components/PickleRick/PickleRick";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      favorites: [],
      disablePrev: true,
      pageSwitch: false,
      toggleRick: false,
      count: 1
    };
    this.favCharacter = this.favCharacter.bind(this);
    this.updateCharacter = this.updateCharacter.bind(this);
    this.deleteCharacter = this.deleteCharacter.bind(this);
    this.showCharacters = this.showCharacters.bind(this);
    this.showFavCharacters = this.showFavCharacters.bind(this);
    this.removeFavCharacter = this.removeFavCharacter.bind(this);
    this.togglePickleRick = this.togglePickleRick.bind(this);
    this.getNextPage = this.getNextPage.bind(this);
    this.getPrevPage = this.getPrevPage.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/characters/`).then(res => {
      this.setState({
        characters: res.data
      });
    });
  }

  getNextPage() {
    axios.get(`/api/characters/?page=${this.state.count + 1}`).then(res => {
      this.setState({
        characters: res.data,
        count: this.state.count + 1,
        disablePrev: false
      });
    });
  }

  getPrevPage() {
    axios.get(`/api/characters/?page=${this.state.count - 1}`).then(res => {
      this.setState({
        characters: res.data,
        count: this.state.count - 1
      });
    });

    if (this.state.count === 2) {
      this.setState({ disablePrev: true });
    }
  }

  favCharacter(name, id, image) {
    axios.post(`/api/characters/${id}`, { name, image }).then(res => {
      this.setState({
        characters: res.data[0],
        favorites: res.data[1]
      });
    });
  }

  removeFavCharacter(name, id, image) {
    axios.post(`/api/favCharacters/${id}`, { name, image }).then(res => {
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

  togglePickleRick() {
    this.setState({
      toggleRick: !this.state.toggleRick
    });
  }

  render() {
    const {
      characters,
      pageSwitch,
      favorites,
      toggleRick,
      disablePrev
    } = this.state;
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
    let favoriteList = favorites.map(favCharacter => {
      return (
        <FavCharacter
          key={favCharacter.id}
          name={favCharacter.name}
          image={favCharacter.image}
          id={favCharacter.id}
          removeFavCharacter={this.removeFavCharacter}
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
          <div>
            {!toggleRick ? (
              <main className="main">
                {!pageSwitch ? characterList : favoriteList}
              </main>
            ) : (
              <main className="main">
                <PickleRick />
              </main>
            )}
          </div>
          <div className="blackholeContainer">
            <img
              className="blackhole"
              alt="blackhole"
              src="https://i.pinimg.com/favicons/6f076339ae0423719147a9dd3d21f728926500e6995e8a16aa06c087.png?842f63c30ea08a7817170cad48d5ebfb"
            />
          </div>
        </div>
        {!pageSwitch ? (
          <Footer
            getNextPage={this.getNextPage}
            getPrevPage={this.getPrevPage}
            togglePickleRick={this.togglePickleRick}
            disablePrev={disablePrev}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
