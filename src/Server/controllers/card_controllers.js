const axios = require("axios");

let characters = [];
let favorites = [];

module.exports = {
  getCharacters: (req, res) => {
    let { page } = req.query;

    if (!page) {
      page = 1;
    }

    if (!characters.length) {
      axios
        .get(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(list => {
          characters = list.data.results;
          res.status(200).send(characters);
        })
        .catch(err => res.status(500).send(err));
    } else {
      res.status(200).send(characters);
    }
  },
  favCharacter: (req, res) => {
    const { name, image } = req.body;
    const { id } = req.params;
    const index = characters.findIndex(char => char.id === parseInt(id));
    characters.splice(index, 1);
    favorites.push({ name, id, image });
    res.status(200).json([characters, favorites]);
  },
  updateCharacter: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    characters.forEach(char => {
      if (char.id === parseInt(id)) {
        person.name = name;
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
