const express = require("express");
const { json } = require("body-parser");
const app = express();
const port = 3030;
const charController = require("./controllers/card_controllers");

app.use(json());
app.use(express.static(`${__dirname}/../build`));

app.get("/api/characters/", charController.getCharacters);
app.post("/api/characters/:id", charController.favCharacter);
app.post("/api/favCharacters/:id", charController.removeFavCharacter);
app.put("/api/characters/:id", charController.updateCharacter);
app.delete("/api/characters/:id", charController.deleteCharacter);

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on Port : ${port}`);
});
