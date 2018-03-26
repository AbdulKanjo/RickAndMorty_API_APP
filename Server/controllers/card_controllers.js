const axios = require("axios");

let characters = [];
let favorites = [];

module.exports = {
  getCharacters: (req, res) => {
    let { page } = req.query;

    if (!page) {
      page = 1;
    }
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(list => {
        characters = list.data.results;
        res.status(200).send(characters);
      })
      .catch(err => res.status(500).send(err));
  },
  favCharacter: (req, res) => {
    const { name, image } = req.body;
    const { id } = req.params;
    const index = characters.findIndex(char => char.id === parseInt(id));
    characters.splice(index, 1);
    favorites.push({ name, id: parseInt(id), image });
    res.status(200).json([characters, favorites]);
  },
  removeFavCharacter: (req, res) => {
    const { name, image } = req.body;
    const { id } = req.params;
    const index = favorites.findIndex(char => char.id === parseInt(id));
    favorites.splice(index, 1);
    characters.push({ name, id: parseInt(id), image });
    res.status(200).json([characters, favorites]);
  },
  updateCharacter: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    characters.forEach(char => {
      if (char.id === parseInt(id)) {
        char.name = name;
      }
    });
    res.status(200).json(characters);
  },
  deleteCharacter: (req, res) => {
    const { id } = req.params;
    const index = characters.findIndex(char => char.id === parseInt(id));
    characters.splice(index, 1);
    res.status(200).json(characters);
  }
};
